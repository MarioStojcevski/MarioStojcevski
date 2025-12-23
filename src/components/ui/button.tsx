import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap font-bold rounded-base transition-all focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          {
            "border-2 border-black bg-main text-main-foreground hover:bg-black hover:text-white active:translate-x-1 active:translate-y-1": variant === "default",
            "border-2 border-black bg-transparent text-black hover:bg-black hover:text-white": variant === "outline",
            "border-2 border-transparent text-black hover:bg-gray-100": variant === "ghost",
            "h-10 px-4 py-2 text-base": size === "default",
            "h-9 px-3 text-sm": size === "sm",
            "h-11 px-8 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
