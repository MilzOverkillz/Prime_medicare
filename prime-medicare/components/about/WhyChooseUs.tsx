import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Clock, HeartPulse, Users } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Easy Appointments',
    description: 'Book appointments online in minutes, and skip the long waiting lines.',
    color: '#1565c0',
  },
  {
    icon: HeartPulse,
    title: 'Patient-Centered Care',
    description: 'We listen, we care, and we create personalized treatment plans for your better wellbeing.',
    color: '#1565c0',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Confidential',
    description: 'Your health information is protected with top-level security and strict privacy standards.',
    color: '#1565c0',
  },
  {
    icon: Users,
    title: '24/7 Support',
    description: 'Our support team is always available to assist you whenever you need help.',
    color: '#1565c0',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-8">
      {/* Header */}
      <p className="mb-2 text-sm font-semibold text-[#00a6a6]">Why Choose Us</p>
      <h1 className="mb-10 max-w-2xl text-2xl font-extrabold leading-tight text-[#1e293b] sm:text-3xl">
        Expert care. Modern facilities. Better outcomes.
      </h1>

      {/* Photo card + feature cards grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 w-1184px">
        {/* Photo card with overlay label */}
        <div className="relative col-span-1 overflow-hidden rounded-2xl">
          <Image
            src="/images/about-whychoose.png"
            alt="Expert medical team"
            width={400}
            height={480}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-[#1e293b]/90 p-4">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#00a6a6]">
              <Users size={16} className="text-white" strokeWidth={2} />
            </div>
            <h3 className="mb-1 text-sm font-semibold text-white">Expert Medical Team</h3>
            <p className="text-xs leading-relaxed text-white/80">
              Expert doctors delivering specialized care with the highest standards.
            </p>
          </div>
        </div>

        {/* Feature cards — 2x2 grid taking the remaining space */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-2">
          {features.map(({ icon: Icon, title, description, color }) => (
            <div key={title} className="rounded-2xl bg-[#f8fafc] p-5">
              <div
                className="mb-4 flex h-9 w-9 items-center justify-center rounded-full"
                style={{ backgroundColor: color }}
              >
                <Icon size={16} className="text-white" strokeWidth={2} />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-[#1e293b]">{title}</h3>
              <p className="text-xs leading-relaxed text-[#475569]">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA banner */}
      <div className="mt-4 flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#f8fafc] p-6 sm:flex-row">
        <div>
          <p className="mb-1 text-sm font-semibold text-[#00a6a6]">
            Better Healthcare Starts With Better Access
          </p>
          <p className="max-w-xl text-sm leading-relaxed text-[#475569]">
            Better healthcare starts with easy access to trusted medical
            services, expert professionals, timely consultations, and
            personalized support designed around your needs, wherever you are.
          </p>
        </div>
        
        <a
          href="/contact"
          className="flex flex-shrink-0 items-center gap-3 rounded-full bg-[#1565c0] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#11509e]"
        >
          Contact Us
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
            <svg className="h-3 w-3" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 7.5h11M9.5 2l5 5.5L9.5 13" stroke="#1565c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
