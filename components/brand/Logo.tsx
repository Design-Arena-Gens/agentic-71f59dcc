export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="h-8 w-8 rounded-xl bg-primary" />
      <span className="text-lg font-black tracking-tight" style={{ fontFamily: 'var(--font-logo, var(--font-ui))' }}>
        TasteNow
      </span>
    </div>
  );
}
