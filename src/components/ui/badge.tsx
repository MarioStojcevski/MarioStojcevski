import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center border-2 border-black px-2.5 py-0.5 text-xs font-bold whitespace-nowrap rounded-base",
        {
          "bg-main text-main-foreground": variant === "default",
          "bg-transparent text-black": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
