// ServiceCategoriesGrid.tsx
"use client";

import ServiceCategoryCard from "./ServiceCategoryCard";
import {
  Camera, FlaskConical, Sparkles, FolderCog, ClipboardList,
  Building2, Activity, HeartPulse, Radiation, Syringe, Brain,
} from "lucide-react";

const topRow = [
  { icon: <Camera size={30} />, title: "Medicals", description: "We specialize in carrying out Staff Health Screenings, routine Medical Examinations, Insurance Medicals, Foreign Pre-Employment Medicals and local pre-employment checks", dark: true },
  { icon: <FlaskConical size={30} />, title: "Laboratary", description: "Accurate testing for reliable health insights." },
  { icon: <Sparkles size={30} />, title: "Dental Unit", description: "Complete care for healthy, confident smiles." },
  { icon: <FolderCog size={30} />, title: "Specialized Services", description: "Expert care for specialized healthcare needs." },
];

const middleRow = [
  { icon: <ClipboardList size={30} />, title: "OPD Services", description: "Convenient care for everyday medical needs." },
  { icon: <Building2 size={30} />, title: "Corporate Wellness", description: "Health programs for healthier, productive workplaces." },
  { icon: <Activity size={30} />, title: "Physiotherapy/ Chiropracter Unit", description: "Personalized care for improved movement and mobility." },
];

const bottomRow = [
  { icon: <HeartPulse size={30} />, title: "Electrocardiogram", description: "Reliable heart monitoring for better cardiac assessment." },
  { icon: <Radiation size={30} />, title: "Radiology Unit", description: "Advanced imaging for accurate medical diagnosis." },
  { icon: <Syringe size={30} />, title: "Vaccination", description: "Protection against preventable diseases and infections." },
  { icon: <Brain size={30} />, title: "Psychological Services", description: "Compassionate support for mental and emotional wellbeing." },
];

export default function ServiceCategoriesGrid() {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold text-[#00a6a6]">Our Services</p>
        <h2 className="text-2xl font-extrabold text-[#1e293b] sm:text-3xl">Service Categories</h2>
      </div>

      <div className="mx-auto space-y-5">
        {/* Row 1: 4 cards */}
        <div className="grid grid-cols-1  gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {topRow.map((cat) => (
            <ServiceCategoryCard key={cat.title} {...cat} />
          ))}
        </div>

        {/* Row 2: 3 cards */}
        <div className="grid grid-cols-1 min-w-[311px] min-h-[422px]  ml-20 mr-20 gap-3 sm:grid-cols-3">
          {middleRow.map((cat) => (
            <ServiceCategoryCard key={cat.title} {...cat} />
          ))}
        </div>

        {/* Row 3: 4 cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {bottomRow.map((cat) => (
            <ServiceCategoryCard key={cat.title} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}