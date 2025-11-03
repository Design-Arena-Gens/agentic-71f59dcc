import * as React from "react";
import clsx from "clsx";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx("card p-4", className)} {...props} />;
}

export function CardMedia({ children }: { children: React.ReactNode }) {
  return <div className="relative overflow-hidden rounded-2xl">{children}</div>;
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-3 text-base font-semibold">{children}</h3>;
}

export function CardSubtitle({ children }: { children: React.ReactNode }) {
  return <p className="mt-1 text-sm muted">{children}</p>;
}
