export default function TrackPage() {
  const steps = [
    { title: "Order placed", time: "12:05" },
    { title: "Preparing", time: "12:10" },
    { title: "On the way", time: "12:25" },
    { title: "Delivered", time: "12:45" },
  ];
  const current = 2;
  return (
    <div className="safe-x safe-y space-y-6">
      <header>
        <h1 className="text-2xl font-bold">Track Order</h1>
        <p className="muted">Real-time updates for your delivery.</p>
      </header>

      <div className="card p-4">
        <ol className="relative ml-3 border-l border-black/10 pl-6">
          {steps.map((s, i) => (
            <li key={s.title} className="mb-6 last:mb-0">
              <div className={`absolute -left-[9px] mt-1 h-4 w-4 rounded-full ${i <= current ? 'bg-primary' : 'bg-black/10'}`} />
              <div className="flex items-center justify-between">
                <div className={`font-semibold ${i <= current ? '' : 'muted'}`}>{s.title}</div>
                <div className="text-sm muted">{s.time}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="card p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold">Driver ? Alex</div>
            <div className="text-sm muted">Arriving in ~10 mins</div>
          </div>
          <button className="touch-target rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white">Contact</button>
        </div>
      </div>
    </div>
  );
}
