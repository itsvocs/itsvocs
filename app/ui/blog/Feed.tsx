"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
// import { Send } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { useFormState } from "react-dom";
import { newFeedBack } from "@/lib/action";
import { Input } from "@/components/ui/input";
import SubmitButton from "../SubmitButton";
interface FeedComponentProps {
  slug: string;
}

export default function FeedComponent({ slug }: FeedComponentProps) {
  const initialState = { message: "", errors: {} };
  const [value, setValue] = useState(4);
  const [state, dispatch] = useFormState(newFeedBack, initialState);

  const feedBackValues = ["Awful", "Poor", "Okay", "Good", "Amazing"];

  const emojis = ["😡", "🙁", "😐", "🙂", "😍"];
  return (
    <div className="flex flex-col gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Feedback</Button>
        </PopoverTrigger>
        <PopoverContent className="w-72">
          <form action={dispatch}>
            <div className="*:not-first:mt-3">
              <Label className="mb-2 text-sm font-semibold">
                Rate your experience
              </Label>
              <div className="flex items-center gap-2">
                <Slider
                  name="rating"
                  value={[value]}
                  onValueChange={(newValue) => setValue(newValue[0])}
                  min={1}
                  max={5}
                  showTooltip
                  tooltipContent={(val) => feedBackValues[val - 1]}
                  aria-label="Rate your experience"
                />
                <span className="text-2xl">{emojis[value - 1]}</span>
              </div>
            </div>
            <div className="space-y-3 pt-2">
              <Input type="hidden" name="slug" value={slug} />
              <Textarea
                aria-disabled
                id="feedback"
                name="message"
                placeholder="Write a message..."
                aria-label="SendIcon feedback"
              />
              {state.message && (
                <p
                  className="text-emerald-500 mt-2 text-xs"
                  role="alert"
                  aria-live="polite">
                  {state.message}
                </p>
              )}
              <div className="flex flex-col sm:flex-row sm:justify-end">
                <SubmitButton className="h-8" />
              </div>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
