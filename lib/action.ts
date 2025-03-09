"use server";

import { db } from "@/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { validateEmailAddress } from "./blog/utils";

const FormSchema = z.object({
  id: z.number(),
  email: z
    .string()
    .email({ message: "A valid Email is required." })
    .refine(validateEmailAddress, {
      message: "Email does not meet custom validation rules",
    }),
  isSubscribed: z.boolean(),
});

const CreateSubscriber = FormSchema.omit({ id: true, isSubscribed: true });

export type State = {
  errors?: {
    email?: string[];
  };
  message?: string | null;
};

export async function createSubscriber(prevState: State, formData: FormData) {
  const validatedField = await CreateSubscriber.safeParseAsync({
    email: formData.get("email"),
  });

  if (!validatedField.success) {
    return {
      errors: validatedField.error.flatten().fieldErrors,
      message: "Email is Required",
    };
  }

  const { email } = validatedField.data;

  try {
    await db.subscriber.create({
      data: {
        email: email,
      },
    });
    revalidatePath("/");
    return { message: "Thank you for Subscribing!" };
  } catch (error) {
    if (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          return {
            message: "Email already Exist.",
          };
        }
      }
    }

    return { message: "Database Error: Failed to create Subscriber." };
  }
}

// Server Action Like Button

interface UpdateLikesParams {
  slug: string;
  action: "increment" | "decrement";
}

export async function updateLikes({
  slug,
  action,
}: UpdateLikesParams): Promise<number | null> {
  try {
    const updatedBlog = await db.blog.update({
      where: { slug },
      data: {
        likes: {
          [action]: 1,
        },
      },
      select: { likes: true },
    });
    return updatedBlog.likes;
  } catch (error) {
    console.error(`Erreur lors de la mise à jour des likes :`, error);
    return null;
  }
}

// Add a Feedback

type StateFeedBack = {
  errors?: {
    rating?: string[];
    message?: string[];
    slug?: string[];
    database?: string[];
  };
  message?: string | null;
};

const feedbackSchema = z.object({
  rating: z
    .number()
    .min(1, { message: "Rating must be at least 1" })
    .max(5, { message: "Rating cannot be higher than 5" }),
  message: z.string(),
  slug: z.string().min(1, { message: "Slug is required." }),
});

export async function newFeedBack(
  prevState: StateFeedBack,
  formData: FormData
) {
  // Validation des données du formulaire
  const validatedField = await feedbackSchema.safeParseAsync({
    rating: Number(formData.get("rating")),
    message: formData.get("message"),
    slug: formData.get("slug"),
  });

  if (!validatedField.success) {
    return {
      errors: validatedField.error.flatten().fieldErrors,
      message: validatedField.error.message,
    };
  }

  const { rating, message, slug } = validatedField.data;

  try {
    // Vérifier si l'article existe avec le slug donné
    const blog = await db.blog.findUnique({ where: { slug } });

    if (!blog) {
      return {
        errors: { slug: ["No article found with this slug."] },
        message: "No article found.",
      };
    }

    // Ajouter la Review
    await db.review.create({
      data: {
        rating,
        message,
        article: { connect: { id: blog.id } },
      },
    });

    revalidatePath(`/blog/${blog.category}/${slug}`);
    return { message: "Feedback submitted successfully!" };
  } catch (error) {
    console.error("Failed to save feedback:", error);

    return {
      errors: {
        database: ["Failed to save feedback due to a database error."],
      },
      message: "Database error occurred.",
    };
  }
}
