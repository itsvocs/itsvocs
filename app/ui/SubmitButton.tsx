"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../../components/ui/button";

interface SubmitButtonProps {
  className?: string;
  text?: string;
}

export default function SubmitButton({ className, text }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className={`group relative  ${className}`}
      aria-disabled={pending}
      disabled={pending}>
      {pending ? (
        <span className="animate-pulse">lädt...</span>
      ) : (
        <span className="group-data-[loading=true]:text-transparent">
          {text ? text : "Submit"}
        </span>
      )}
    </Button>
  );
}
