// OurTeamSection.tsx
import DoctorCard from "./DoctorCard";

const doctors = [
  { name: "Dr. Shiraz Deen", title: "General Practitioner", image: "/images/doctor1.png" },
  { name: "Dr. Shifaz Deen", title: "General Practitioner", image: "/images/doctor2.png" },
  { name: "Dr. Nandaka Dickwella", title: "General Practitioner", image: "/images/doctor3.png" },
  { name: "Dr. Fathima Shahnaz", title: "General Practitioner", image: "/images/doctor4.png" },
];

export default function OurTeamSection() {
  return (
    <section className="px-4 py-16 md:px-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-semibold text-[#00a6a6]">Our Team</p>
        <h2 className="text-2xl font-extrabold leading-tight text-[#1e293b] sm:text-3xl">
          Meet the experts behind your care.
        </h2>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {doctors.map((doc) => (
          <DoctorCard key={doc.name} {...doc} />
        ))}
      </div>
    </section>
  );
}