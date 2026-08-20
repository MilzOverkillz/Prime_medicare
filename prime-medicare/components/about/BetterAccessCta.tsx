import React from "react";
import Link from "next/link";

export default function BetterAccessCta() {
  return (
    <section className="bg-[#f8fafc] rounded-[24px] p-6 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-[#1565c0] rounded-full">
          <svg
            className="w-6 h-6 text-[#f8fafc]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          </svg>
        </div>
        <div className="flex-1">
          <h2 className="text-[22px] font-medium text-[#00a6a6]">
            Better Healthcare Starts  With Better Access
          </h2>
          <p className="mt-2 text-[#1e293b] text-base leading-6">
            Better healthcare starts with easy access to trusted medical
            services, expert professionals, timely consultations, and
            personalized support designed around your needs, wherever you are.
          </p>
        </div>
        <Link href="/contact" className="mt-4 sm:mt-0">
          <button className="flex items-center gap-2 bg-[#1565c0] text-[#f8fafc] rounded-full px-4 py-2 hover:bg-[#1354a0] transition-colors">
            <span>Contact Us</span>
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 4l1.41 1.41L8.83 10H20v2H8.83l4.58 4.59L12 18l-8-8 8-8z" />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
}