"use server";

import { db } from "@/db";
import { Prisma } from "@prisma/client";
import { z } from "zod";
import { validateEmailAddress } from "./blog/utils";
import { Resend } from "resend";
import dns from "dns";
import { promisify } from "util";
import { revalidatePath } from "next/cache";

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
      select: { likes: true, category: true, slug: true },
    });

    revalidatePath(`/blog/${updatedBlog.category}/${updatedBlog.slug}}`); // Navigate to the new post page
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

//! Email with Resend
// Schéma de validation pour l'email et le message
const contactFormSchema = z.object({
  email: z.string().email("Bitte geben Sie eine richtige Email Adresse"),
  message: z.string().min(2, "Die Nachricht muss nicht leer sein"),
});

const resend = new Resend(process.env.RESEND_API_KEY);
const resolveMx = promisify(dns.resolveMx);

async function isEmailDomainValid(email: string) {
  try {
    const domain = email.split("@")[1];
    const mxRecords = await resolveMx(domain);
    return Array.isArray(mxRecords) && mxRecords.length > 0;
  } catch (error) {
    console.error("Erreur lors de la vérification du domaine:", error);
    return false;
  }
}

export async function sendContactForm(formData: {
  email: string;
  message: string;
}) {
  try {
    // Validation des données avec Zod
    const validatedData = contactFormSchema.parse(formData);

    // Vérification du domaine de l'email
    const isEmailValid = await isEmailDomainValid(validatedData.email);

    if (!isEmailValid) {
      throw new Error("Die E-Mail-Adresse ist ungültig oder hat keine Domain.");
    }

    const { error } = await resend.emails.send({
      from: `Kontaktformular <onboarding@resend.dev>`, // Verwenden Sie eine von Resend verifizierte Adresse
      replyTo: validatedData.email, // Utiliser l'email de l'utilisateur comme reply-to
      to: "jordanpouani@icloud.com",
      subject: "Neue Kontaktanfrage",
      html: `
        <div style=" margin: 0 auto;">
          <p><strong>From:</strong> ${validatedData.email}</p>
          <div style="margin-top: 20px; padding: 4px;">
            <p><strong>Nachricht:</strong></p>
            <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #666;">
            Diese E-Mail wurde über das Kontaktformular Ihrer Website gesendet.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Erreur lors de l'envoi de l'e-mail:", error);
      throw new Error("Fehler beim Versand der E-Mail");
    }
    return { success: true };
  } catch (error) {
    console.error("Erreur dans Server Action:", error);
    if (error instanceof z.ZodError) {
      throw new Error(
        error.errors.length > 0
          ? error.errors[0].message
          : "Ein Validierungsfehler ist aufgetreten."
      );
    }
    let errorMessage;
    if (error instanceof Error) errorMessage = error.message;
    else errorMessage = "Fehler bei der Sendung.";
    return { success: false, message: errorMessage };
  }
}
