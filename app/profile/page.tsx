export default function ProfilePage() {
  return (
    <div className="safe-x safe-y space-y-6">
      <header>
        <h1 className="text-2xl font-bold">Profile</h1>
        <p className="muted">Manage preferences and settings.</p>
      </header>
      <div className="card divide-y divide-black/10">
        {[
          { label: "Account", desc: "Name, email, phone" },
          { label: "Addresses", desc: "Saved delivery locations" },
          { label: "Payments", desc: "Cards and methods" },
          { label: "Notifications", desc: "Promotions and order status" },
        ].map((row) => (
          <div key={row.label} className="flex items-center justify-between p-4">
            <div>
              <div className="font-semibold">{row.label}</div>
              <div className="text-sm muted">{row.desc}</div>
            </div>
            <div className="text-sm text-primary">Edit</div>
          </div>
        ))}
      </div>
    </div>
  );
}
