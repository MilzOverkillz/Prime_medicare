// components/Navbar.tsx
"use client";

import { usePathname } from "next/navigation";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "CORPORATE", href: "/corporate" },
  { label: "SERVICES", href: "/services" },
  { label: "JOIN US", href: "/join-us" },
  { label: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex w-full items-center justify-between bg-white px-6 py-5 text-[#1e293b] md:px-10">
      <a href="/" className="flex items-center gap-2">
        <img src="/images/logo.png" alt="Prime Medicare" className="h-9 w-auto md:h-10" />
      </a>

      <ul className="hidden items-center gap-8 text-xs font-semibold tracking-wide md:flex">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.label}>
              <a
                href={link.href}
                className={`pb-1 transition-colors hover:text-[#1565c0] ${
                  isActive
                    ? "border-b-2 border-[#1565c0] text-[#1565c0]"
                    : "border-b-2 border-transparent"
                }`}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>

      <a
        href="/contact"
        className="hidden rounded-full bg-[#1565c0] px-6 py-2 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-[#11509e] md:inline-block"
      >
        CONTACT US
      </a>

      <button
        type="button"
        aria-label="Open menu"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 md:hidden"
      >
        <span className="block h-0.5 w-4 bg-[#1e293b]" />
      </button>
    </nav>
  );
}