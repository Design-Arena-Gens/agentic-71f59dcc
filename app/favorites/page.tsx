import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FavoritesPage() {
  return (
    <div className="safe-x safe-y space-y-6">
      <header>
        <h1 className="text-2xl font-bold">Saved</h1>
        <p className="muted">Your favorites in one place.</p>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {[1,2,3].map((i) => (
          <div key={i} className="card p-4">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary/15 to-primary/30" />
              <div className="flex-1">
                <div className="font-semibold">Favorite Place {i}</div>
                <div className="text-sm muted">4.8 ? Fusion</div>
              </div>
              <Button variant="ghost" className="rounded-full">
                <Heart className="h-5 w-5 text-primary" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
