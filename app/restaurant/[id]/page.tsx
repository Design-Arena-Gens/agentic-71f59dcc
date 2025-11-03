import { Button } from "@/components/ui/button";

export default function RestaurantDetailPage() {
  return (
    <div className="safe-x safe-y space-y-6">
      <div className="h-40 w-full rounded-2xl bg-gradient-to-br from-primary/20 to-primary/40" />
      <header>
        <h1 className="text-2xl font-bold">Saffron & Sage</h1>
        <p className="muted">Modern Indian ? 20?30 min ? $$</p>
      </header>

      <section className="space-y-3">
        <h2 className="section-title">Menu</h2>
        <div className="grid grid-cols-1 gap-4">
          {[1,2,3].map((i) => (
            <div key={i} className="card p-4">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary/15 to-primary/30" />
                <div className="flex-1">
                  <div className="font-semibold">Butter Chicken {i}</div>
                  <div className="text-sm muted">Creamy tomato gravy ? 400g</div>
                </div>
                <Button>Add</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-20 z-40 mx-auto max-w-screen-md px-4 sm:px-6">
        <div className="card flex items-center justify-between p-3">
          <div>
            <div className="text-sm muted">2 items</div>
            <div className="font-semibold">$24.30</div>
          </div>
          <Button>View Order</Button>
        </div>
      </div>
    </div>
  );
}
