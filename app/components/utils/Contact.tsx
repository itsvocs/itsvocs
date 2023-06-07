"use client";
import db from "@/config/firebase";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Loading from "../lottie/Loading";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { InformationCircleIcon } from "@heroicons/react/20/solid";

interface CommentFormData {
  firstName: string;
  lastName: string;
  email: string;
  tel: number;
  message: string;
}

function ContactForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CommentFormData>();
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const onSubmit: SubmitHandler<CommentFormData> = async (data) => {
    setLoading(true);

    const { firstName, lastName, email, tel, message } = data;

    if (!firstName || !lastName || !email || !message) {
      setLoading(false);
      return;
    }

    const newContact = {
      firstName,
      lastName,
      email,
      message,
      tel,
      timestamp: new Date(),
    };
    try {
      await addDoc(collection(db, "contact"), newContact);
      setLoading(false);
      router.push("/contact/thank-you");
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de l'ajout du commentaire :",
        error
      );
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-8 sm:py-48 ">
      <div className="lg:max-w-lg max-w-2xl  mx-auto">
        <div className="grid sm:grid-cols-2 gap-y-8 gap-x-6 grid-cols-1 text-slate-200">
          <div>
            <label htmlFor="firstName" className="block text-sm leading-6">
              Nom
            </label>
            <div className="mt-3">
              <input
                type="text"
                id="firstName"
                className={`input ${errors.firstName && "!ring-red-500/60"} `}
                {...register("firstName", {
                  required: "Ce champ est réquis pour continuer.",
                  minLength: {
                    value: 3,
                    message: "Ce champ doit avoir plus de trois caractères",
                  },
                })}
              />
              <span className="error-input">{errors.firstName?.message}</span>
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm leading-6">
              Prenom
            </label>
            <div className="mt-3">
              <input
                type="text"
                id="lastName"
                className={`input ${errors.lastName && "!ring-red-500/60"} `}
                {...register("lastName", {
                  required: "Ce champ est réquis pour continuer.",
                  minLength: {
                    value: 3,
                    message: "Ce champ doit avoir plus de trois caractères",
                  },
                })}
              />
              <span className="error-input">{errors.lastName?.message}</span>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="lblock text-sm leading-6">
              Email
            </label>
            <div className="mt-3">
              <input
                type="email"
                id="email"
                className={`input ${errors.email && "!ring-red-500/60"} `}
                {...register("email", {
                  required: "Ce champ est réquis pour continuer.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "adresse Email invalide.",
                  },
                })}
              />
              <span className="error-input">{errors.email?.message}</span>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm leading-6">
              Numero de téléphone
            </label>
            <div className="mt-3">
              <input
                type="tel"
                id="phone-number"
                className={`input ${errors.tel && "!ring-red-500/60"} `}
                {...register("tel", {
                  required: "Ce champ est réquis pour continuer.",
                  pattern: {
                    value:
                      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
                    message: "Numéro de téléphone invalid",
                  },
                  maxLength: {
                    value: 12,
                    message: "Oups verifier votre numero de telephone",
                  },
                })}
              />
              <span className="error-input">{errors.tel?.message}</span>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm leading-6">
              Message
            </label>
            <div className="mt-3">
              <textarea
                id="message"
                rows={4}
                className={`input ${errors.message && "!ring-red-500/60"} `}
                {...register("message", {
                  required: "Ce champ est réquis pour continuer.",
                })}
              />
              <span className="error-input">{errors.message?.message}</span>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center">
          {loading ? (
            <Loading />
          ) : (
            <button
              type="submit"
              className="rounded-md bg-indigo-500 text-slate-200 hover:bg-indigo-600 cursor-default transition-opacity px-3 py-3 text-center text-xs font-semibold shadow-md w-full">
              Envoyer
            </button>
          )}
        </div>

        <div className="pt-12 text-xs text-slate-400 flex">
          <span>
            <InformationCircleIcon className="w-4 text-indigo-500 flex mr-1" />
          </span>
          <span>
            En cliquant sur le bouton envoyer vous accepter notre{" "}
            <Link href="/privacy-policy" className="link">
              politque de confidentialité
            </Link>{" "}
            et{" "}
            <Link href="/privacy-policy" className="link">
              d'Utilisation generales
            </Link>{" "}
            de vos données.
          </span>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
