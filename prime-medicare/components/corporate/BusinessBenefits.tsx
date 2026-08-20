// BusinessPackages.tsx
"use client";

import { useState } from "react";
import { Check, Gem } from "lucide-react";

type Tier = "essential" | "professional" | "enterprise";

const packages = {
  essential: {
    label: "Essential",
    price: "$20",
    priceNote: "/Employee /Month",
    description:
      "A comprehensive healthcare package designed to provide convenient access to essential GP services, routine health support, and affordable care whenever you need it.",
    features: [
      "1 Scheduled GP home visit per year",
      "25% Discount for urgent visits",
      "25% Discount if you exceed your quota",
    ],
  },
  professional: {
    label: "Professional",
    price: "$40",
    priceNote: "/Employee /Month",
    description:
      "A comprehensive healthcare package designed to provide convenient access to essential GP services, routine health support, and affordable care whenever you need it.",
    features: [
      "Annual Health Check",
      "6 GP appointments (remote or clinic) per year",
      "6 'Email my GP' per year (response in 1 working day)",
      "1 Scheduled GP home visit per year",
      "25% Discount if you exceed your quota",
    ],
  },
  enterprise: {
    label: "Enterprice",
    price: "Custom Pricing",
    priceNote: "",
    description:
      "A comprehensive healthcare package designed to provide convenient access to essential GP services, routine health support, and affordable care whenever you need it.",
    features: [
      "1 Scheduled GP home visit per year",
      "25% Discount for urgent visits",
      "25% Discount if you exceed your quota",
    ],
  },
};

export default function BusinessPackages() {
  const [activeTab, setActiveTab] = useState<Tier>("essential");

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-center md:px-8">
      {/* Header */}
      <p className="mb-2 text-sm font-semibold text-[#38bdf8]">Our Business Packages</p>
      <h2 className="mb-4 text-3xl font-extrabold leading-tight text-[#1e293b] sm:text-4xl">
        Business Packages For You
      </h2>
      <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-[#1e293b] sm:text-base">
        Explore our flexible business packages designed to meet your unique
        needs, providing the right solutions, support, and value to help your
        business grow.
      </p>

      {/* Tab toggle */}
      <div className="mx-auto mb-10 inline-flex rounded-full bg-[#1e293b] p-1">
        {(Object.keys(packages) as Tier[]).map((tier) => (
          <button
            key={tier}
            onClick={() => setActiveTab(tier)}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
              activeTab === tier
                ? "bg-white text-[#00a6a6] ring-1 ring-[#00a6a6]"
                : "text-white"
            }`}
          >
            {packages[tier].label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
        {(Object.keys(packages) as Tier[]).map((tier) => {
          const pkg = packages[tier];
          const isFeatured = tier === "professional";

          return (
            <div
              key={tier}
              className={`relative flex flex-col rounded-2xl border p-6 text-left ${
                isFeatured
                  ? "border-2 border-[#1565c0] shadow-lg md:-mt-4"
                  : "border-slate-200"
              }`}
            >
              {isFeatured && (
                <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-[#1565c0] px-4 py-1.5 text-xs font-semibold text-white">
                  <Gem size={12} />
                  Professional
                </span>
              )}

              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#f8fafc]">
                <div className="h-4 w-4 rounded-sm bg-[#1e293b]" />
              </div>

              <h3 className="mb-3 text-center text-xl font-bold text-[#1e293b]">
                {pkg.label}
              </h3>

              <p className="mb-5 text-sm leading-relaxed text-[#475569]">
                {pkg.description}
              </p>

              <ul className="mb-6 flex flex-col gap-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-[#1e293b]">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-[#1565c0]" strokeWidth={2.5} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                {pkg.price === "Custom Pricing" ? (
                  <p className="mb-4 text-center text-sm font-semibold text-[#1e293b]">
                    Custom Pricing
                  </p>
                ) : (
                  <p className="mb-4 text-center">
                    <span className="text-2xl font-extrabold text-[#1e293b]">{pkg.price}</span>
                    <span className="text-sm text-[#475569]">{pkg.priceNote}</span>
                  </p>
                )}

                <button
                  className={`w-full rounded-full py-2.5 text-sm font-semibold transition-colors ${
                    isFeatured
                      ? "bg-[#1565c0] text-white hover:bg-[#11509e]"
                      : "border border-[#1e293b] text-[#1e293b] hover:bg-slate-50"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}