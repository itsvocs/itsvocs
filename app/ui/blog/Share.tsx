"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useId, useRef, useState } from "react";
import {
  Check,
  CopySimple,
  Envelope,
  FacebookLogo,
  InstagramLogo,
  ShareFat,
  XLogo,
} from "@phosphor-icons/react";

export default function ShareComponent({
  slug,
  category,
}: {
  slug: string;
  category: string | null | undefined;
}) {
  const id = useId();
  const [copied, setCopied] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const shareUrl = `https://itsvocs.me/blog/${category}/${slug}`;

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className=" flex flex-col gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full">
            <ShareFat size={16} weight="duotone" aria-hidden="true" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72">
          <div className="flex flex-col gap-3 text-center">
            <div className="text-sm font-medium">Seite teilen</div>
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                size="icon"
                variant="outline"
                aria-label="Share on Instagram"
                onClick={() =>
                  window.open(
                    `https://www.instagram.com/share?url=${encodeURIComponent(
                      shareUrl
                    )}`,
                    "_blank"
                  )
                }>
                <InstagramLogo size={16} aria-hidden="true" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                aria-label="Share on Twitter"
                onClick={() =>
                  window.open(
                    `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      shareUrl
                    )}`,
                    "_blank"
                  )
                }>
                <XLogo size={16} weight="duotone" aria-hidden="true" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                aria-label="Share on Facebook"
                onClick={() =>
                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      shareUrl
                    )}`,
                    "_blank"
                  )
                }>
                <FacebookLogo size={16} aria-hidden="true" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                aria-label="Share via email"
                onClick={() =>
                  window.open(
                    `mailto:?subject=Check out this article&body=${encodeURIComponent(
                      shareUrl
                    )}`,
                    "_blank"
                  )
                }>
                <Envelope weight="duotone" size={16} aria-hidden="true" />
              </Button>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Input
                  ref={inputRef}
                  id={id}
                  className="pe-9"
                  type="text"
                  defaultValue={shareUrl}
                  aria-label="Share link"
                  readOnly
                />
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={handleCopy}
                        className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed"
                        aria-label={copied ? "Copied" : "Copy to clipboard"}
                        disabled={copied}>
                        <div
                          className={cn(
                            "transition-all",
                            copied
                              ? "scale-100 opacity-100"
                              : "scale-0 opacity-0"
                          )}>
                          <Check
                            weight="bold"
                            className="stroke-emerald-500 text-emerald-500"
                            size={16}
                            aria-hidden="true"
                          />
                        </div>
                        <div
                          className={cn(
                            "absolute transition-all",
                            copied
                              ? "scale-0 opacity-0"
                              : "scale-100 opacity-100"
                          )}>
                          <CopySimple
                            weight="bold"
                            size={16}
                            aria-hidden="true"
                          />
                        </div>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="px-2 py-1 text-xs">
                      Copy to clipboard
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
