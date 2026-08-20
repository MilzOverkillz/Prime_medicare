import Image from "next/image";

export default function AboutStats() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Big image — left column, full height, with blue border ring */}
        <div className="relative min-h-[400px] overflow-hidden rounded-2xl ring-2 ring-[#1565c0] md:min-h-[420px]">
          <Image
            src="/images/about-doctor.png"
            alt="Doctor gesturing in hospital corridor"
            fill
            className="object-cover"
          />
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">

          {/* Top row: stat stack + single image side by side */}
          <div className="flex gap-4">
            {/* Stat cards stack */}
            <div className="flex w-1/2 flex-col gap-2.5">
              <div className="flex items-center gap-2 rounded-lg bg-[#f8fafc] px-4 py-3">
                <span className="text-sm font-semibold text-[#1e293b]">50+</span>
                <span className="text-xs text-[#1e293b]">Medical Professionals</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-[#1e293b] px-4 py-3">
                <span className="text-sm font-semibold text-white">10K+</span>
                <span className="text-xs text-white">Patients Served</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-[#f8fafc] px-4 py-3">
                <span className="text-sm font-semibold text-[#1e293b]">15+</span>
                <span className="text-xs text-[#1e293b]">Healthcare Services</span>
              </div>
            </div>

            {/* Single image */}
            <div className="relative w-1/2 overflow-hidden rounded-2xl">
              <Image
                src="/images/about-stats.png"
                alt="Doctor writing notes with stethoscope"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Dark "Connected Healthcare" card — full width of right column */}
          <div className="rounded-2xl bg-[#1e293b] p-6">
            <div className="rounded-xl bg-[#f8fafc] p-6">
              <h2 className="mb-2 text-lg font-medium text-black">Connected Healthcare</h2>
              <p className="text-base leading-6 text-black">
                Connecting patients and healthcare professionals through
                seamless, accessible, digitally enabled care experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}