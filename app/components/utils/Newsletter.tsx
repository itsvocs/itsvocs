"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import HeartMini from "../lottie/Heartmini";
import { SubmitHandler, useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import db from "@/config/firebase";
import Loading from "../lottie/Loading";

interface CommentFormData {
  email: string;
}

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CommentFormData>();

  const router = useRouter();

  const onSubmit: SubmitHandler<CommentFormData> = async (data) => {
    setState("LOADING");

    const { email } = data;

    if (!email) {
      setState("ERROR");
      return;
    }

    const newEmail = {
      email,
      timestamp: new Date(),
    };

    try {
      const response = await axios.post("/api/newsletter", { email });
      await addDoc(collection(db, "email"), newEmail);
      router.push("/newsletter/thank-you");
      setState("SUCCESS");
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de l'ajout du de l'adresse email :",
        error
      );
      if (axios.isAxiosError(error) && error.response) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage("Une erreur s'est produite");
      }
      setState("ERROR");
    }
  };

  // const subscribe = async () => {
  //   setState("LOADING");
  //   setErrorMessage(null);
  //   try {
  //     const response = await axios.post("/api/newsletter", { email });
  //     router.push("/newsletter/thank-you");
  //     setState("SUCCESS");
  //   } catch (e) {
  //     if (axios.isAxiosError(e) && e.response) {
  //       setErrorMessage(e.response.data.error);
  //     } else {
  //       setErrorMessage("Une erreur s'est produite");
  //     }
  //     setState("ERROR");
  //   }
  // };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative isolate mt-8 flex items-center pr-1">
        <label className="sr-only">Adresse email</label>
        <input
          type="email"
          {...register("email", {
            required: "Ce champ est réquis pour continuer.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "adresse Email invalide.",
            },
          })}
          placeholder="you@domain.com"
          className="peer w-0 flex-auto bg-transparent outline-none px-4 py-2.5  text-white placeholder:text-zinc-700 focus:outline-none border-transparent focus:border-none focus:ring-transparent text-sm"
        />
        <button
          type="submit"
          className="group relative isolate flex-none rounded-md py-1.5 text-[0.8125rem]/6 font-semibold text-white hover:text-indigo-500 transition-all pl-2.5 pr-[calc(9/16*1rem)]"
          disabled={state === "LOADING"}>
          {state === "LOADING" ? (
            <Loading />
          ) : (
            <>
              <span className="absolute inset-0 rounded-md bg-gradient-to-b from-white/80 to-white opacity-10 transition-opacity group-hover:opacity-15"></span>
              <span className="absolute inset-0 rounded-md opacity-7.5 transition-opacity group-hover:opacity-10"></span>
              Notifier moi <span aria-hidden="true">→</span>
            </>
          )}
        </button>
        <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-1 peer-focus:ring-indigo-300/10 "></div>
        <div
          className={`absolute bg-white/2.5 inset-0 -z-10 rounded-lg  ring-1 transition peer-focus:ring-slate-300/70  ${
            state === "ERROR" || errors.email
              ? "ring-red-500/80"
              : "ring-slate-300/30"
          }`}></div>
      </form>
      {state === "ERROR" && <p className="error-input">{errorMessage}</p>}
      {errors.email && <p className="error-input">{errors.email?.message}</p>}
      {state === "SUCCESS" && (
        <p className="mt-2 text-green-600 text-sm">L'email a été ajouté !</p>
      )}
    </>
  );
}
