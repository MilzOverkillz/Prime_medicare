"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const JoinUsHero: React.FC = () => {
  return (
    <section className="mx-auto max-w-10xl px-4 py-12 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 max-w-10xl items-center gap-15 md:grid-cols-2">
        {/* Left column — copy */}
        <div className="flex min-w-[706px] flex-col  items-start">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#1e293b] sm:text-4xl md:text-[44px] md:leading-[1.15]">
            <span className="text-[#1565c0]">Together</span> We Deliver{" "}
            Exceptional <span className="text-[#1565c0]">Care</span>
            <br />
            Every Single Day
          </h1>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#1e293b] md:text-base">
            Join a dedicated team committed to delivering exceptional
            healthcare while growing your career in an environment that
            values innovation, compassion, and professional excellence.
          </p>

          <button
            type="button"
            className="mt-8 flex items-center gap-3 rounded-full bg-[#1565c0] px-6 py-2.5 text-white transition-colors hover:bg-[#11509e]"
          >
            <span className="text-sm font-semibold">Contact Us</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
              <ArrowRight size={14} className="text-[#1565c0]" strokeWidth={2.5} />
            </span>
          </button>
        </div>

        {/* Right column — two doctor photos, side by side, 557 x 713 per Figma */}
        <div className="relative mx-auto flex h-[500px] w-full max-w-[440px] overflow-hidden rounded-2xl md:h-[600px] lg:h-[713px] lg:max-w-[557px]">
          <div className="relative h-full w-1/2">
            <Image
              src="/images/joinus-hero1.png"
              alt="Female doctor smiling"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative h-full w-1/3">
            <Image
              src="/images/joinus-hero2.png"
              alt="Male doctor smiling"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsHero;