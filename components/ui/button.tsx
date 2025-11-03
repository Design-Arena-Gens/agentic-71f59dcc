import * as React from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  fullWidth?: boolean;
};

export function Button({ className, variant = "primary", fullWidth, ...props }: ButtonProps) {
  const base = "touch-target inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-colors active:scale-[0.99]";
  const variants: Record<Variant, string> = {
    primary: "bg-primary text-white hover:opacity-95",
    secondary: "bg-secondary text-white hover:opacity-95",
    ghost: "bg-transparent text-neutral hover:bg-black/5",
  };
  return <button className={clsx(base, variants[variant], fullWidth && "w-full", className)} {...props} />;
}
