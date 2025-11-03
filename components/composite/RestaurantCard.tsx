import { Heart, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardMedia, CardSubtitle, CardTitle } from "@/components/ui/card";

export function RestaurantCard() {
  return (
    <Card>
      <CardMedia>
        <div className="aspect-[16/9] w-full bg-gradient-to-br from-primary/20 to-primary/40" />
        <button className="absolute right-3 top-3 inline-flex rounded-full bg-surface/90 p-2 backdrop-blur transition hover:bg-surface">
          <Heart className="h-5 w-5" />
        </button>
      </CardMedia>
      <div className="flex items-start justify-between">
        <div>
          <CardTitle>Saffron & Sage</CardTitle>
          <CardSubtitle>Modern Indian ? 1.2 km</CardSubtitle>
          <div className="mt-2 flex items-center gap-2 text-sm">
            <Star className="h-4 w-4 text-primary" />
            <span>4.7</span>
            <span className="muted">(1.2k)</span>
            <span className="muted">?</span>
            <MapPin className="h-4 w-4" />
            <span>Downtown</span>
          </div>
        </div>
        <div className="text-right">
          <div className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">20?30 min</div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <Button variant="ghost" className="border border-black/10">View</Button>
        <Button>Order</Button>
      </div>
    </Card>
  );
}
