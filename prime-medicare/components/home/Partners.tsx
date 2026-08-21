import Image from 'next/image';
import React from 'react';

const partners = [
  {
    name: 'Wexham Road Pharmacy',
    description:
      'Trusted community pharmacy providing prescriptions, wellness advice, and personalized healthcare support.',
    logo: '/images/home-partner1.png',
    highlighted: false,
  },
  {
    name: 'Viva Health',
    description:
      'Modern healthcare provider delivering innovative medical solutions and patient-focused care.',
    logo: '/images/home-partner2.png',
    highlighted: true,
  },
  {
    name: 'London Medical Laboratary',
    description:
      'Leading diagnostics provider offering accurate testing, health screenings, and reliable results.',
    logo: '/images/home-partner3.png',
    highlighted: false,
  },
];

export default function Partners() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        {/* Left column: copy + photos */}
        <div>
          <p className="text-sm font-semibold text-[#00a6a6]">Our Partners</p>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight text-[#1e293b] sm:text-4xl">
            Get Know Our Partners
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[#1e293b]">
            Trusted partnerships with leading healthcare providers deliver comprehensive,
            accessible, and high-quality medical services, ensuring exceptional care for
            every patient.
          </p>

          <div className="mt-10 flex gap-4">
            <div className="relative h-24 w-28 overflow-hidden rounded-xl">
              <Image
                src="/images/home-handshake.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-24 w-28 overflow-hidden rounded-xl">
              <Image
                src="/images/home-facility.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right column: stacked partner cards */}
        <div className="flex flex-col gap-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className={`flex items-center justify-between gap-4 rounded-2xl p-6 ${
                partner.highlighted ? 'bg-[#38BDF8]' : 'bg-[#f8fafc]'
              }`}
            >
              <div>
                <h3 className="text-lg font-semibold text-[#1e293b]">{partner.name}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#1e293b]">
                  {partner.description}
                </p>
              </div>
              <div className="relative h-12 w-28 flex-shrink-0">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain object-right"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}