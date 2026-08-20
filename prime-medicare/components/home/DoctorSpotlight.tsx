import Image from "next/image";

const doctors = [
  {
    name: "Dr Shiraz Deen",
    credential: "board-certified, licensed",
    experience: "10+ Years",
    bio: "Dr. Shiraz Deen is a board-certified, licensed, and highly reputed GP practitioner in the Thames Valley area. He has been working as a GP for the past 10 years. As a highly qualified GP, Dr. Shiraz Deen aims to deliver the most effective, reliable, and best-quality medical treatment in England & Sri Lanka.",
    image: "/images/doctors/shiraz-deen.jpg",
  },
];

export default function DoctorSpotlight() {
  const activeIndex = 0;
  const doctor = doctors[activeIndex];

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 text-center md:px-8">
      {/* Header */}
      <p className="mb-2 text-sm font-semibold text-[#38bdf8]">Our Specialists</p>
      <h2 className="mb-4 text-3xl font-extrabold leading-tight text-[#1e293b] sm:text-4xl">
        Meet Some of Our Doctors
      </h2>
      <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[#1e293b]">
        Meet our team of highly experienced private GP&rsquo;s. Our GP practitioners aim
        to provide you with comprehensive private GP services tailored to your medical
        needs. At Prime Medicare Ltd., you are in safe hands. Our team is your team!
      </p>

      {/* Doctor card */}
      <div className="mx-auto flex max-w-4xl items-center gap-6 rounded-[28px] bg-[#e7f1fb] p-5 text-left sm:p-6 md:gap-8">
        {/* Content */}
        <div className="flex w-full flex-col justify-center md:w-3/5">
          <div className="mb-4 flex w-full items-center justify-between">
            <span className=" px-3 py-1 text-xs font-medium text-[#0891b2]">
              {doctor.credential}
            </span>
            <span className="rounded-full bg-[#1e3a8a] px-3 py-1 text-xs font-semibold text-white">
              {doctor.experience}
            </span>
          </div>

          <h3 className="mb-2 text-xl font-bold text-[#1e293b]">{doctor.name}</h3>

          <p className="text-sm leading-relaxed text-[#475569]">{doctor.bio}</p>
        </div>

        {/* Image — inset within the card, not flush to its edges */}
        <div className="relative hidden ml-10 h-48 w-40 flex-shrink-0 overflow-hidden rounded-[20px] md:block">
          <Image src="/images/home-specialist.png" alt={doctor.name} fill className="object-cover" />
        </div>
      </div>

      {/* Pagination dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {doctors.length > 1 ? (
          doctors.map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === activeIndex ? "w-6 bg-[#38bdf8]" : "w-2 bg-slate-300"
              }`}
            />
          ))
        ) : (
          [0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === 0 ? "w-6 bg-[#38bdf8]" : "w-2 bg-slate-300"
              }`}
            />
          ))
        )}
      </div>
    </section>
  );
}