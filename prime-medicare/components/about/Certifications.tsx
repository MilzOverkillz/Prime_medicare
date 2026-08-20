import Image from 'next/image';
import React from 'react';

type CertificationCard = {
  id: number;
  title: string;
  subtitle: string;
  imageAlt: string;
  imageSrc: string;
};

const certifications: CertificationCard[] = [
  {
    id: 1,
    title: 'Sri Lanka Medical Council',
    subtitle: 'Registered practitioners',
    imageAlt: 'Sri Lanka Medical Council certification',
    imageSrc: '/images/placeholder1.png',
  },
  {
    id: 2,
    title: 'Ministry of Health, Sri Lanka',
    subtitle: 'Registered clinic',
    imageAlt: 'Ministry of Health, Sri Lanka certification',
    imageSrc: '/images/placeholder2.png',
  },
  {
    id: 3,
    title: 'Prime Medicare UK',
    subtitle: 'Group clinical governance',
    imageAlt: 'Prime Medicare UK certification',
    imageSrc: '/images/placeholder3.png',
  },
];

const iconMap: Record<number, React.JSX.Element> = {
  1: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-3-3v6"
      />
    </svg>
  ),
  2: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4"
      />
    </svg>
  ),
  3: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3"
      />
    </svg>
  ),
};

const Certificationsnpx: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="text-center">
        <h2 className="text-[#00a6a6] text-[22px] font-medium">
          Our Certifications
        </h2>
        <h1 className="mt-4 text-[#1e293b] text-[56px] font-extrabold leading-[68px]">
          Quality &amp; Compliance Committed to patient care.
        </h1>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="rounded-[16px] bg-white p-6 shadow-md flex flex-col items-center"
          >
            <div className="flex w-full justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1565c0] text-white">
                {iconMap[cert.id]}
              </div>
            </div>

            <Image
              src={cert.imageSrc}
              alt={cert.imageAlt}
              width={279}
              height={150}
              className="mt-4 rounded-[16px] object-cover"
            />

            <h3 className="mt-4 text-center text-[#1e293b] text-[28px] font-semibold">
              {cert.title}
            </h3>
            <p className="mt-2 text-center text-[#1e293b] text-[22px] font-medium">
              {cert.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificationsnpx;