import * as React from "react";
import clsx from "clsx";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      className={clsx(
        "w-full rounded-xl border border-black/10 bg-surface px-4 py-3 text-sm outline-none ring-0 placeholder:opacity-60 focus:border-primary",
        className
      )}
      {...props}
    />
  );
});
