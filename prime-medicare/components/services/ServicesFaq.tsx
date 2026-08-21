// ServicesFaq.tsx
import ServicesFaqAccordion from "./ServicesFaqAccordion";

export default function ServicesFaq() {
  return (
    <section className="bg-[#f0f9fb] px-4 py-16 md:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-2 text-sm font-semibold text-[#00a6a6]">Questions & Answers</p>
        <h2 className="mb-4 text-2xl font-extrabold text-[#1e293b] sm:text-3xl">
          Frequently asked questions
        </h2>
        <p className="text-sm leading-relaxed text-[#475569] md:text-base">
          Find quick answers to common questions about our medical services,
          appointments, doctors, and patient care. We are here to make your
          healthcare experience simple and convenient.
        </p>
      </div>

      <div className="mt-10">
        <ServicesFaqAccordion />
      </div>
    </section>
  );
}