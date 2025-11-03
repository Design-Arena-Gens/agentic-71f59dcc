"use client";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { Input } from "@/components/ui/input";
import { Tabs } from "@/components/ui/tabs";
import { RestaurantCard } from "@/components/composite/RestaurantCard";
import { Filter, SlidersHorizontal, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="safe-x safe-y space-y-6">
      <header className="flex items-center justify-between">
        <Logo />
        <Button variant="ghost" className="rounded-full">
          <Sparkles className="h-5 w-5" />
        </Button>
      </header>

      <div className="flex items-center gap-3">
        <div className="flex-1">
          <Input placeholder="Search dishes, places, cuisines" />
        </div>
        <Button variant="ghost" className="rounded-xl border border-black/10">
          <Filter className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {[
          "Trending",
          "Nearby",
          "Breakfast",
          "Lunch",
          "Dinner",
          "Vegetarian",
          "Desserts",
        ].map((f, i) => (
          <Chip key={f} selected={i === 0} className="whitespace-nowrap" >{f}</Chip>
        ))}
      </div>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="section-title">Discover</h2>
          <Link href="#" className="text-sm text-primary">See all</Link>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="section-title">Quick picks</h2>
          <Link href="#" className="text-sm text-primary">Customize</Link>
        </div>
        <Tabs
          tabs={[
            { id: "popular", label: "Popular" },
            { id: "fast", label: "Fast" },
            { id: "new", label: "New" },
          ]}
        />
        <div className="grid grid-cols-2 gap-4">
          {[1,2,3,4].map((i) => (
            <div key={i} className="card p-3">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/15 to-primary/30" />
              <div className="mt-2 text-sm font-semibold">Chef Bowl {i}</div>
              <div className="mt-1 text-xs muted">15?20 min ? $$</div>
              <Button className="mt-2 w-full">Add</Button>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="section-title">Book a table</h2>
          <Button variant="ghost" className="rounded-xl border border-black/10">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {[1,2].map((i) => (
            <div key={i} className="card p-4">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary/15 to-primary/30" />
                <div className="flex-1">
                  <div className="font-semibold">Cozy Corner {i}</div>
                  <div className="text-sm muted">Casual ? Downtown</div>
                </div>
                <Button>Book</Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
