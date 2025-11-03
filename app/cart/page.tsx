import { Button } from "@/components/ui/button";

export default function CartPage() {
  return (
    <div className="safe-x safe-y space-y-6">
      <header>
        <h1 className="text-2xl font-bold">Your Order</h1>
        <p className="muted">Review and proceed to checkout.</p>
      </header>

      <div className="space-y-4">
        {[1,2].map((i) => (
          <div key={i} className="card p-4">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary/15 to-primary/30" />
              <div className="flex-1">
                <div className="font-semibold">Signature Bowl {i}</div>
                <div className="text-sm muted">Extra sauce ? No onions</div>
              </div>
              <div className="text-right">
                <div className="font-semibold">$12.{i}0</div>
                <div className="text-xs muted">Qty: 1</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card p-4">
        <div className="flex items-center justify-between">
          <span className="muted">Subtotal</span>
          <span className="font-semibold">$24.30</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="muted">Delivery</span>
          <span className="font-semibold">$2.50</span>
        </div>
        <div className="mt-3 border-t border-black/10 pt-3 flex items-center justify-between">
          <span className="font-semibold">Total</span>
          <span className="font-bold">$26.80</span>
        </div>
        <Button className="mt-4 w-full">Checkout</Button>
      </div>
    </div>
  );
}
