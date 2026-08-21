import Image from "next/image";
import { cn } from "@/lib/utils";
const SERVICE_ICONS = [
  "/images/home/Vector.svg",
  "/images/home/Vector-1.svg",
  "/images/home/Vector-2.svg",
  "/images/home/Vector-3.svg",
];

const TRUST_AVATARS = [
  "/images/home/person1.jpg",
  "/images/home/person2.jpg",
  "/images/home/person3.jpg",
  "/images/home/person4.jpg",
  "/images/home/person5.jpg",
];

function Callout({
  className,
  flip,
  children,
}: {
  className: string;
  flip?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("absolute z-20 hidden lg:block", className)}>
      <Image
        src="/images/home/designer-line.svg"
        alt=""
        width={96}
        height={35}
        className={cn(
          "absolute top-0 h-[35px] w-[96px] max-w-none",
          flip ? "-left-[96px] -scale-x-100" : "-right-[96px]",
        )}
      />
      <p className="font-heading text-lg leading-7 font-medium text-white/90">
        {children}
      </p>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-screen items-end overflow-hidden bg-brand-900 lg:h-[1020px] lg:min-h-0">
        <Image
          src="/images/home/bg-home-hero.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0000004D]" />

        <div className="absolute top-0 right-0 bottom-0 z-10 hidden w-[42%] md:block lg:top-[198px] lg:right-auto lg:bottom-auto lg:left-[547px] lg:h-[821px] lg:w-[793px]">
          <Image
            src="/images/home/doctor.png"
            alt="Doctor at Prime Medicare"
            fill
            priority
            className="object-contain object-bottom"
          />
        </div>

        <Callout
          className="lg:top-[198px] lg:left-[1153px] lg:h-[56px] lg:w-[132px]"
          flip
        >
          Trusted by
          <br />
          1000+ patients
        </Callout>
        <Callout className="lg:top-[498px] lg:left-[715px] lg:h-[56px] lg:w-[71px]">
          Expert
          <br />
          Doctors
        </Callout>
        <Callout
          className="lg:top-[494px] lg:left-[1254px] lg:h-[84px] lg:w-[86px]"
          flip
        >
          Patient First
          <br />
          Approach
        </Callout>
        <Callout className="lg:top-[811px] lg:left-[547px] lg:h-[84px] lg:w-[88px]">
          Advanced Medical
          <br />
          Care
        </Callout>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-16 md:pt-40 md:px-10 lg:absolute lg:top-[191px] lg:left-[99px] lg:mx-0 lg:w-[541px] lg:max-w-none lg:px-0 lg:py-0">
          <div className="max-w-xl lg:max-w-none">
            <p className="font-heading text-lg font-medium text-white lg:text-[22px] lg:leading-8">
              Reliable Care, Anywhere Anytime
            </p>

            <h1 className="mt-4 font-heading text-4xl leading-[1.05] font-extrabold text-white sm:text-5xl md:text-6xl lg:mt-2 lg:text-[72px] lg:leading-[104px] lg:tracking-[-1.44px]">
              <span className="block">Compassionate</span>
              <span className="block">Care. Trusted</span>
              <span className="flex flex-wrap items-center gap-4">
                Doctors.
                <span className="flex items-center gap-3 rounded-full border-0 bg-white/10 px-4 py-2.5 backdrop-blur-md">
                  {SERVICE_ICONS.map((icon) => (
                    <span
                      key={icon}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F8FAFC] bg-white/10 backdrop-blur-md"
                    >
                      <Image src={icon} alt="" width={18} height={18} />
                    </span>
                  ))}
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-md text-white/80 lg:mt-4 lg:max-w-none lg:text-lg lg:leading-[16px] lg:tracking-normal">
              Advanced healthcare with experienced Expert doctors who put your
              health first.
            </p>

            <form className="mt-8 flex max-w-lg rounded-full bg-white p-1.5 pl-6 lg:mt-[71px] lg:h-[60px] lg:w-[535px] lg:max-w-none">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 bg-transparent text-brand-900 outline-none placeholder:text-brand-900/50"
              />
              <button
                type="submit"
                className="flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-700 lg:h-[48px] lg:w-[192px] lg:px-0 lg:py-0"
              >
                Get Started
              </button>
            </form>

            <div className="mt-8 flex flex-col items-start gap-3 lg:mt-[104px]">
              <div className="flex -space-x-3">
                {TRUST_AVATARS.map((avatar) => (
                  <span
                    key={avatar}
                    className="h-9 w-9 overflow-hidden rounded-full lg:h-[35px] lg:w-[35px]"
                  >
                    <Image
                      src={avatar}
                      alt=""
                      width={35}
                      height={35}
                      className="h-full w-full object-cover"
                    />
                  </span>
                ))}
              </div>
              <p className="font-heading text-sm font-medium text-white/90 lg:text-base">
                Trusted by 1000+ patients
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
