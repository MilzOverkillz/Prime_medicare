"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Corporate", href: "/corporate" },
  { label: "Join Us", href: "/join-us" },
  { label: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.9.529 3.68 1.446 5.198L2 22l4.937-1.396A9.955 9.955 0 0 0 12.001 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.187a8.15 8.15 0 0 1-4.152-1.13l-.298-.177-3.033.858.826-2.958-.194-.304a8.15 8.15 0 0 1-1.253-4.363c0-4.508 3.667-8.174 8.176-8.174 2.184 0 4.238.85 5.783 2.396a8.121 8.121 0 0 1 2.393 5.784c-.001 4.508-3.667 8.068-8.248 8.068z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.877h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/", Icon: WhatsAppIcon },
  { label: "Facebook", href: "https://facebook.com/", Icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com/", Icon: InstagramIcon },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden rounded-t-[32px]">
      {/* Background image — fills the footer responsively */}
      <div
        className="absolute inset-0 bg-cover bg-bottom"
        style={{ backgroundImage: "url('/images/footer-bg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#eaf3fb] via-[#eaf3fb]/85 to-[#eaf3fb]/30" />

      <div className="relative z-10 mx-auto max-w-[1364px] px-6 py-12 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/images/footer.png"
              alt="Prime Medicare Private GP"
              width={160}
              height={48}
              className="h-10 w-auto"
            />

            <p className="mt-4 text-sm leading-relaxed text-[#1e293b]">
              Prime Medicare Colombo
              <br />
              19, St Albans Place, Colombo
            </p>

            <div className="mt-4 flex flex-col gap-3">
              <a href="tel:0114242030" className="flex items-center gap-3 text-sm text-[#1e293b]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1e293b] text-white">
                  <Phone size={14} />
                </span>
                011 424 2030
              </a>
              <a href="mailto:support@primemedicareltd.com" className="flex items-center gap-3 text-sm text-[#1e293b]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1e293b] text-white">
                  <Mail size={14} />
                </span>
                support@primemedicareltd.com
              </a>
            </div>
          </div>

          <div className="text-center">
            <h3 className="mb-4 text-base font-semibold text-[#1e293b]">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[#1e293b] transition-colors hover:text-[#2563eb]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h3 className="mb-4 text-base font-semibold text-[#1e293b]">Legal</h3>
            <ul className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[#1e293b] transition-colors hover:text-[#2563eb]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 mt-6 text-base font-semibold text-[#1e293b]">Follow Us On</h3>
            <div className="flex justify-center gap-3 md:justify-end">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0f172a] text-white transition-colors hover:bg-[#2563eb]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-slate-300 pt-6 text-xs text-[#1e293b] md:flex-row">
          <p>All rights reserved.</p>
          <p>Copyright © 2026 Prime Medicare Colombo</p>
        </div>
      </div>
    </footer>
  );
}