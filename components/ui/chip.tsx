import * as React from "react";
import clsx from "clsx";

type ChipProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean;
};

export function Chip({ className, selected, ...props }: ChipProps) {
  return (
    <button
      className={clsx(
        "touch-target rounded-full px-4 py-2 text-sm",
        selected ? "bg-primary text-white" : "bg-surface text-neutral hover:bg-black/5",
        className
      )}
      {...props}
    />
  );
}
