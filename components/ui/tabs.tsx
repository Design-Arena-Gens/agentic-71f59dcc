"use client";
import * as React from "react";
import clsx from "clsx";

type TabsProps = {
  tabs: { id: string; label: string }[];
  initialId?: string;
  onChange?: (id: string) => void;
};

export function Tabs({ tabs, initialId, onChange }: TabsProps) {
  const [active, setActive] = React.useState(initialId ?? tabs[0]?.id);
  return (
    <div className="relative grid grid-cols-3 rounded-xl bg-surface p-1">
      {tabs.map((t) => {
        const isActive = t.id === active;
        return (
          <button
            key={t.id}
            className={clsx(
              "touch-target relative rounded-lg px-3 py-2 text-sm transition-colors",
              isActive ? "bg-primary text-white" : "text-neutral hover:bg-black/5"
            )}
            onClick={() => {
              setActive(t.id);
              onChange?.(t.id);
            }}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
