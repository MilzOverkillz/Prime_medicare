import Image from "next/image";
import { Tablet, Users, Heart } from "lucide-react";

const ingredients = [
  {
    icon: Tablet,
    title: "Digital Access",
    description: "Access quality healthcare anytime, anywhere through convenient digital consultations.",
  },
  {
    icon: Users,
    title: "In Person Care",
    description: "Receive compassionate, professional healthcare through trusted in-person consultations.",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Healthcare tailored to your individual needs, preferences, and wellbeing.",
  },
];

export default function Mission() {
  return (
    <section className="relative w-full h-1001px overflow-hidden bg-cover bg-center px-4 py-16 sm:px-8"
      style={{ backgroundImage: "url('/images/about-bg.png')" }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2 md:px-8">
        {/* Left column — copy */}
        <div>
          <p className="mb-3 text-sm font-semibold text-[#00a6a6]">Our Mission</p>

          <h1 className="mb-6 text-3xl font-extrabold leading-tight text-[#1e293b] sm:text-4xl md:text-[40px]">
            Total health care for your family —{" "}
            <span className="text-[#1565c0]">wherever they are</span>
          </h1>

          <p className="mb-8 max-w-lg text-sm leading-relaxed text-[#1e293b] md:text-base">
            Prime Medicare is committed to deliver world-class, accessible
            healthcare by combining advanced medical expertise with our
            Digi-physical care model, providing convenient, personalized, and
            high-quality care across Sri Lanka.
          </p>

          <p className="mb-6 text-sm font-semibold text-[#1565c0] md:text-base">
            We believe in the following three key ingredients:
          </p>

          {/* Ingredients — stacked vertically */}
          <div className="flex flex-col gap-6">
            {ingredients.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#1565c0]">
                  <Icon size={18} className="text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="mb-1 text-base font-semibold text-[#1e293b]">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#475569]">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}