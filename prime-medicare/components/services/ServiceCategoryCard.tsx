// ServiceCategoryCard.tsx
import { ArrowRight } from "lucide-react";

interface ServiceCategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  dark?: boolean;
}

export default function ServiceCategoryCard({ icon, title, description, dark = false }: ServiceCategoryCardProps) {
  return (
    <div
      className={`flex min-h-[422px]  flex-col items-center gap-3 rounded-2xl p-6 text-center ${
        dark ? "bg-[#1e293b] text-white" : "bg-[#f8fafc] text-[#1e293b]"
      }`}
    >
      <div className={`flex h-11 w-11 items-center justify-center  mt-18 rounded-full ${dark ? "bg-[#334155] text-[#7dd3fc]" : "bg-[#dbeafe] text-[#1565c0]"}`}>
        {icon}
      </div>
      <h3 className="text-base text-center mt-12 font-semibold leading-snug">{title}</h3>
      <p className={`text-xs leading-relaxed sm:text-sm ${dark ? "text-white/80" : "text-[#475569]"}`}>
        {description}
      </p>
      {dark && (
        <a href="#" className="mt-2 flex items-center gap-1.5 text-sm font-medium text-white">
          Learn More
          <ArrowRight size={14} />
        </a>
      )}
    </div>
  );
}