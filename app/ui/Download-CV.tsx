"use client";
import React, { useState } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CheckCircle,
  Envelope,
  Users,
  WarningCircle,
} from "@phosphor-icons/react";
import { Textarea } from "@/components/ui/textarea";
import { sendContactForm } from "@/lib/action";

export function DownloadCV() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      if (!email.trim() || !message.trim()) {
        throw new Error("Bitte füllen Sie alle Felder aus.");
      }

      // Einfache E-Mail-Validierung
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      }

      const send = await sendContactForm({ email, message });

      if (send.success) {
        setIsSuccess(true);

        // Nach 3 Sekunden das Erfolgsformular zurücksetzen und Dialog schließen
        setTimeout(() => {
          setIsSuccess(false);
          setIsOpen(false);
          setEmail("");
          setMessage("");
        }, 5000);
      } else {
        setIsSuccess(false);
        setError(send.message || "Fehler bei der Sendung");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      setError(
        error instanceof Error
          ? error.message
          : "An error occurred. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white text-sm">
            Kontaktiere mich
          </HoverBorderGradient>
        </DialogTrigger>
        <DialogContent className="max-w-lg">
          {!isSuccess && (
            <div className="mb-2 flex flex-col items-center gap-2">
              <div
                className="flex size-11 shrink-0 items-center text-blue-500 justify-center rounded-full border"
                aria-hidden="true">
                <Users weight="duotone" width={20} height={20} />
              </div>
              <DialogHeader>
                <DialogTitle className="sm:text-center">
                  Kontakt aufnehmen
                </DialogTitle>
                <DialogDescription className="sm:text-center">
                  Schreiben Sie Ihre E-Mail-Adresse und Nachricht.
                </DialogDescription>
              </DialogHeader>
            </div>
          )}
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center space-y-4 py-6">
              <CheckCircle
                className="text-green-600 dark:text-green-400"
                weight="duotone"
                size={36}
              />
              <h3 className="text-lg font-medium">Vielen Dank!</h3>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                Ihre Nachricht wurde erfolgreich gesendet. Ich werde mich so
                schnell wie möglich bei Ihnen melden.
              </p>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div className="relative">
                  <Input
                    id="dialog-email"
                    className="peer ps-9"
                    placeholder="hi@yourcompany.com"
                    type="email"
                    aria-label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting ? true : false}
                  />
                  <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                    <Envelope weight="duotone" size={16} aria-hidden="true" />
                  </div>
                </div>
                <Textarea
                  id="message"
                  placeholder="Ihre Nachricht..."
                  aria-label="Ihre Nachricht"
                  className="field-sizing-content max-h-29.5 min-h-[none]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isSubmitting ? true : false}
                  required
                />
              </div>

              {error && (
                <div className=" py-3 text-red-600">
                  <p className="text-sm">
                    <WarningCircle
                      weight="bold"
                      className="me-1 -mt-0.5 inline-flex opacity-40"
                      size={18}
                      aria-hidden="true"
                    />
                    {error}
                  </p>
                </div>
              )}

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center justify-center animate-pulse">
                    Wird gesendet...
                  </span>
                ) : (
                  "Senden"
                )}
              </Button>
            </form>
          )}

          {!isSuccess && (
            <p className="text-muted-foreground text-center text-xs">
              Mit dem Absenden akzeptieren Sie unsere{" "}
              <a className="underline hover:no-underline" href="#">
                Datenschutzrichtlinien
              </a>
              .
            </p>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
