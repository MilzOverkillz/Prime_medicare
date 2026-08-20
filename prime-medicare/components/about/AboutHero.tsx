import Image from 'next/image';
import { FC } from 'react';

const AboutHero: FC = () => {
  const partnerImages = [
    { id: '627:286', alt: 'Partner 1' },
    { id: '627:287', alt: 'Partner 2' },
    { id: '627:288', alt: 'Partner 3' },
    { id: '627:289', alt: 'Partner 4' },
    { id: '627:290', alt: 'Partner 5' },
  ];

  return (
    <section className="px-4 py-10 text-center sm:px-6 lg:px-8">
      <h2 className="text-xl font-medium leading-8 text-[#1e293b] sm:text-2xl">
        Trusted Care, Better Lives
      </h2>

      <h1 className="mx-auto mt-3 max-w-3xl text-[#1e293b] font-extrabold text-3xl leading-[1.15] sm:text-4xl md:text-5xl lg:text-[56px] tracking-[-1px]">
        Innovating Healthcare, Empowering Lives
      </h1>

      <button className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1565c0] px-6 py-2 hover:bg-[#11509e] focus:outline-none focus:ring-2 focus:ring-[#1565c0]">
        <span className="text-[#f8fafc] font-semibold text-base">Contact Us</span>
        <span className="flex size-8 items-center justify-center rounded-full bg-[#f8fafc]">
          <svg className="size-4" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 7.5h11M9.5 2l5 5.5L9.5 13" stroke="#1565c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      <div className="mt-10 flex justify-center -space-x-2">
        {partnerImages.map((img) => (
          <Image
            key={img.id}
            src={`/images/home-patients.png`}
            alt={img.alt}
            width={40}
            height={40}
            className="rounded-full border-2 border-white"
          />
        ))}
      </div>

      <p className="mt-4 text-sm text-[#1e293b]">Trusted by 1000+ patients</p>
    </section>
  );
};

export default AboutHero;