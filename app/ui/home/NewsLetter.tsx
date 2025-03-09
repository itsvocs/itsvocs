"use client";
import React from "react";
import { useFormState } from "react-dom";
import { createSubscriber } from "@/lib/action";
import { Input } from "@/components/ui/input";
import { useId } from "react";
import SubmitButton from "@/app/ui/SubmitButton";
import { NavigationArrow } from "@phosphor-icons/react";

function Form() {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createSubscriber, initialState);
  const id = useId();

  return (
    <form action={dispatch} className="space-y-4">
      <div className="space-y-2">
        <div className="inline-flex gap-2">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground peer-disabled:opacity-50">
              <NavigationArrow
                className="-scale-x-100"
                weight="duotone"
                aria-hidden="true"
              />
            </div>
            <Input
              id={id}
              className="h-10 flex-1 rounded-full border-zinc-600/65 bg-zinc-700/30 ps-9 text-zinc-100 placeholder:text-zinc-500 md:min-w-64 [&:-webkit-autofill]:bg-zinc-700/30 [&:-webkit-autofill]:[-webkit-text-fill-color:#fff] [&:-webkit-autofill]:[transition:background-color_5000000s_ease-in-out_0s]"
              placeholder="Gib deine E-Mail ein…"
              name="email"
              aria-label="Subscribe to the newsletter"
              aria-describedby="email-error"
              defaultValue=""
              required
            />
          </div>
          <SubmitButton className="rounded-full h-10" text="Subscribe" />
        </div>
        {state?.errors?.email && state.errors.email[0] && (
          <p
            key={state.errors.email[0]}
            className="mt-2 text-sm text-destructive"
            role="alert"
            aria-live="polite">
            {state.errors.email[0]}
          </p>
        )}
        {!state?.errors?.email && (
          <p
            className="absolute mt-2 text-sm text-muted-foreground"
            role="alert"
            aria-live="polite">
            {state?.message}
          </p>
        )}
      </div>
    </form>
  );
}

export function NewsLetter() {
  return (
    <div className="w-full max-w-7xl mx-auto py-24 overflow-hidden px-4 md:px-8">
      <div className="dark relative  rounded-xl bg-zinc-900 px-4 py-14 sm:px-8 overflow-hidden">
        <Illustration
          className="absolute left-0 top-0 -translate-x-1/2"
          aria-hidden="true"
        />
        <Illustration
          className="absolute bottom-0 right-0 translate-x-1/4"
          aria-hidden="true"
        />
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <h2 className="font-heading text-2xl/[1.1] font-bold tracking-tight text-foreground md:text-3xl/[1.1]">
            Neuigkeiten abonnieren.
          </h2>
          <Form />
        </div>
      </div>
    </div>
  );
}

export function Illustration({ className }: { className?: string }) {
  const id = useId();
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="267"
      height="268"
      fill="none"
      aria-hidden="true">
      <g filter={`url(#${id}a)`} style={{ mixBlendMode: "plus-lighter" }}>
        <path
          fill="#fff"
          fillOpacity=".48"
          d="M189 76.284 242.642 24 189 83.753v19.691l-8.148-6.11L24 244 176.099 89.864v-13.58H189Z"
        />
      </g>
      <defs>
        <filter
          id={`${id}a`}
          width="266.642"
          height="268"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_809_24"
            stdDeviation="12"
          />
        </filter>
      </defs>
    </svg>
  );
}
