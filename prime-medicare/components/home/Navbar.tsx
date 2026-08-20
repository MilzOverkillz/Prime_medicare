import React from 'react';

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'CORPORATE', href: '/corporate' },
  { label: 'SERVICES', href: '/services' },
  { label: 'JOIN US', href: '/join-us' },
  { label: 'CONTACT US', href: '/contact' },
];

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-20 flex w-full items-center justify-between px-6 py-5 text-white md:px-10">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2">
        <img src="/images/logo.png" alt="Prime Medicare" className="h-9 w-auto md:h-10" />
      </a>

      {/* Nav links */}
      <ul className="hidden items-center gap-8 text-xs font-semibold tracking-wide md:flex">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={`pb-1 transition-colors hover:text-blue-300 ${
                link.label === 'HOME'
                  ? 'border-b-2 border-blue-400 text-blue-300'
                  : 'border-b-2 border-transparent'
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <a
        href="/contact"
        className="hidden rounded-full border border-white/70 px-6 py-2 text-xs font-semibold tracking-wide transition-colors hover:bg-white hover:text-slate-900 md:inline-block"
      >
        CONTACT US
      </a>

      {/* Mobile menu button */}
      <button
        type="button"
        aria-label="Open menu"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 md:hidden"
      >
        <span className="block h-0.5 w-4 bg-white" />
      </button>
    </nav>
  );
}