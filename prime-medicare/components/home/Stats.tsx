import React from "react";

const stats = [
  { value: "25+", label: "Experienced Years" },
  { value: "24/7", label: "Healthcare Support" },
  { value: "100%", label: "Patient Centred Care" },
];

const AboutUs: React.FC = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 text-center">
      {/* Eyebrow */}
      <p className="text-sm font-semibold uppercase tracking-wide text-[#00a6a6]">
        About Us
      </p>

      {/* Heading */}
      <h2 className="mt-3 text-3xl font-extrabold text-[#0f172a] sm:text-4xl">
        Total Health Care For Your Family
      </h2>

      {/* Paragraph */}
      <p className=" mt-10 ml-0.1 mr-4 min-w-4xl text-xl text-[#475569]">
        Prime Medicare Colombo, a subsidiary of Prime Medicare UK, is a digitally
        enabled multi specialty healthcare provider offering OPD, emergency, dental,
        pharmacy, specialist consultations, telemedicine, and home visits. We combine
        personalised care with advanced medical expertise and international specialist
        access for a seamless healthcare experience.
      </p>

      {/* Stats */}
      <div className="mt-14 ml-10 flex flex-col gap-10 sm:flex-row sm:justify-between sm:gap-2">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center sm:items-start">
            <span className="text-5xl font-extrabold leading-tight text-[#38bdf8] sm:text-[56px]">
              {stat.value}
            </span>
            <hr className="mt-3 mb-2 w-16 border-t border-gray-300 sm:w-full" />
            <p className="text-sm text-[#1e293b]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;