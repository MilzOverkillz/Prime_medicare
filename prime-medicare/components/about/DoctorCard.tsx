// DoctorCard.tsx
import Image from "next/image";


type DoctorCardProps = {
  name: string;
  title: string;
  image: string;
};

export default function DoctorCard({ name, title, image }: DoctorCardProps) {
  return (
    <div className="w-full max-w-[280px] overflow-hidden rounded-2xl bg-[#1565c0]">
      {/* Name + title */}
      <div className="px-4 h-[100px] pb-4 pt-5">
        <h3 className="text-base font-semibold text-white">{name}</h3>
        <p className="text-xs font-bold uppercase tracking-wide text-white/90">{title}</p>
      </div>

      {/* Photo with social icons overlay */}
      <div className="relative h-[416px] w-full">
        <Image src={image} alt={name} fill className="object-cover" />

        <div className="absolute bottom-3 left-3 flex gap-2">
          {/* <a
            href="#"
            aria-label={`${name} on LinkedIn`}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-[#0a7d7d]"
          >
            <Linkedin size={16} strokeWidth={2} />
          </a> */}
          <a
            href="#"
            aria-label={`${name} on X`}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-white"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="black">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}