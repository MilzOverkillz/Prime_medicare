import Image from 'next/image';
import React from 'react';

const Values: React.FC = () => {
  return (
    <section className="space-y-6 px-4 py-12 md:px-8 lg:px-16">
      {/* Our Values header */}
      <div className="mx-auto max-w-3xl pb-4 text-center">
        <h3 className="mb-3 text-sm font-semibold text-[#00a6a6]">Our Values</h3>
        <p className="text-2xl font-extrabold leading-tight text-[#1e293b] sm:text-3xl">
          Compassion, integrity, and excellence in every step of care.
        </p>
      </div>

      {/* Our Remote-Only GP Appointments */}
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-0 overflow-hidden rounded-[24px] bg-[#f8fafc] md:flex-row">
        <div className="flex-1 p-6 md:p-10">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#1565c0]" />
            <h2 className="text-lg font-semibold text-[#1e293b] sm:text-xl">
              Our Remote-Only GP Appointments
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-[#475569] sm:text-base">
            With global healthcare experience, we connect patients with trusted
            local and international medical services, ensuring seamless care
            and support in Sri Lanka.
          </p>
        </div>
        <div className="w-full flex-1 self-stretch">
          <Image
            src="/images/about-values1.png"
            alt="Remote GP"
            width={612}
            height={300}
            className="h-full w-full rounded-r-[24px] object-cover md:rounded-[24px]"
          />
        </div>
      </div>

      {/* Digi-Physical Service */}
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-0 overflow-hidden rounded-[24px] bg-[#f8fafc] md:flex-row-reverse">
        <div className="flex-1 p-6 md:p-10">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#1565c0]" />
            <h2 className="text-lg font-semibold text-[#1e293b] sm:text-xl">
              What is a Digi-Physical Service?
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-[#475569] sm:text-base">
            Start your healthcare journey with a convenient digital
            consultation. If needed, our doctors provide in-person care
            through our Colombo 04 clinic or home visits, ensuring seamless
            support wherever you are.
          </p>
        </div>
        <div className="w-full flex-1 self-stretch">
          <Image
            src="/images/about-values2.png"
            alt="Digi-Physical Service"
            width={612}
            height={300}
            className="h-full w-full rounded-l-[24px] object-cover md:rounded-[24px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Values;