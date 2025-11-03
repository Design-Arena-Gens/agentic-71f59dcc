import type { Metadata } from "next";
import "@/app/globals.css";
import { Inter, Manrope } from "next/font/google";
import Link from "next/link";
import { Home, Heart, ShoppingBag, Search, User } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-ui" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-ui-alt" });

export const metadata: Metadata = {
  title: "TasteNow ? Modern Food Experience",
  description: "Discover, order, book, and track. Fast, clear, delightful.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#FF5A5F",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-background text-neutral">
        <div className="mx-auto max-w-screen-md">
          <main className="pb-24">{children}</main>
          <nav className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-screen-md border-t border-black/5 bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
            <ul className="grid grid-cols-5 items-center safe-x">
              <NavItem href="/" label="Home" icon={<Home className="h-6 w-6" />} />
              <NavItem href="/search" label="Search" icon={<Search className="h-6 w-6" />} />
              <NavItem href="/cart" label="Orders" icon={<ShoppingBag className="h-6 w-6" />} />
              <NavItem href="/favorites" label="Saved" icon={<Heart className="h-6 w-6" />} />
              <NavItem href="/profile" label="Profile" icon={<User className="h-6 w-6" />} />
            </ul>
          </nav>
        </div>
      </body>
    </html>
  );
}

function NavItem({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <li className="py-2">
      <Link href={href} className="touch-target flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-xs hover:bg-black/5">
        <span className="text-neutral">{icon}</span>
        <span className="text-[11px]">{label}</span>
      </Link>
    </li>
  );
}
