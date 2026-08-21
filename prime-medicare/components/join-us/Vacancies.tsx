"use client";

import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const jobs = [
  {
    title: "General Practitioner (GP)",
    type: "Full-Time",
    mode: "Onsite",
    description:
      "Provide comprehensive primary healthcare, diagnose medical conditions, and deliver patient-centered treatment in a collaborative clinical environment.",
    image: "/images/joinus-vacancies1.png",
  },
  {
    title: "Registered Nurse",
    type: "Full-Time",
    mode: "Onsite",
    description:
      "Deliver compassionate patient care, assist medical professionals, and ensure high standards of clinical excellence across healthcare services.",
    image: "/images/joinus-vacancies2.png",
  },
];

export default function Vacancies() {
  return (
    <section className="mx-auto max-w-10xl px-4 py-12 md:px-8">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Left column — copy + CTA */}
        <div className="flex flex-col items-start">
          <p className="mb-4 text-xl font-semibold text-[#1565c0] ">Vacancies</p>

          <h1 className="mb-6 text-3xl font-extrabold leading-tight text-[#1e293b] sm:text-4xl">
            Explore Current Opportunities
          </h1>

          <p className="mb-8 max-w-md text-sm leading-relaxed text-[#1e293b] md:text-base">
            Find a role that matches your skills and passion. Join a team
            committed to delivering exceptional healthcare experiences.
          </p>

          <p className="mb-10 max-w-md text-sm leading-relaxed text-[#475569]">
            We&apos;re always looking for talented individuals. Upload your CV
            and our HR team will contact you when a suitable opportunity
            becomes available.
          </p>

          <button
            type="button"
            className="flex items-center gap-3 rounded-full bg-[#1565c0] px-6 py-2.5 text-white transition-colors hover:bg-[#11509e]"
          >
            <span className="text-sm font-semibold">Upload Your CV</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
              <ArrowRight size={14} className="text-[#1565c0]" strokeWidth={2.5} />
            </span>
          </button>
        </div>

        {/* Right column — overlapping job cards */}
        <div className="relative flex flex-col gap-6">
          <div className="flex items-start justify-center gap-4">
            {jobs.map((job, i) => (
              <div
                key={job.title}
                className={`w-48 flex-shrink-0 overflow-hidden rounded-[20px] bg-[#f8fafc] shadow-md sm:w-56 ${
                  i === 1 ? "mt-10" : ""
                }`}
              >
                {/* Photo with badges */}
                <div className="relative h-80 w-full">
                  <Image src={job.image} alt={job.title} fill className="object-cover" />
                  <div className="absolute left-2 top-2 flex gap-1">
                    <span className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-medium text-[#1e293b]">
                      {job.type}
                    </span>
                    <span className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-medium text-[#1e293b]">
                      {job.mode}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-5">
                  <h3 className="mb-2 text-sm font-semibold text-[#1e293b]">{job.title}</h3>
                  <p className="mb-4 text-xs leading-relaxed text-[#475569]">{job.description}</p>
                  <button className="flex items-center gap-2 rounded-full bg-[#1565c0] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#11509e]">
                    Apply
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white">
                      <ArrowRight size={9} className="text-[#1565c0]" strokeWidth={2.5} />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel nav arrows */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              aria-label="Previous vacancy"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f8fafc] text-[#1e293b] transition-colors hover:bg-slate-200"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              aria-label="Next vacancy"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1565c0] text-white transition-colors hover:bg-[#11509e]"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}