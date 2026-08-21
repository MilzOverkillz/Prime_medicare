// WhyJoinSection.tsx
import Image from "next/image";

export default function WhyJoinSection() {
  return (
    <section className="px-4 py-16 md:px-8">
      {/* Header */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-2 text-sm font-semibold text-[#1565c0]">Why Work With Us</p>
        <h2 className="mb-4 text-2xl font-extrabold text-[#1e293b] sm:text-3xl">
          Why Join Prime Medicare?
        </h2>
        <p className="text-sm leading-relaxed text-[#475569] sm:text-base">
          We believe great healthcare starts with empowered people. From
          continuous learning to a collaborative culture, we help every team
          member grow while making a meaningful impact.
        </p>
      </div>

      {/* Bento grid — named areas lock every card to an exact cell */}
      <div
        className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3"
        style={{
          gridTemplateAreas: `
            "career     doctorsImg  flexible       pills"
            "xrayImg    collab      patientImpact  pills"
            "benefits   modtech     modtech        pills"
          `,
        }}
      >
        <div
          className="rounded-2xl bg-[#dbeafe] p-6"
          style={{ gridArea: "career" }}
        >
          <h3 className="mb-2 text-base font-semibold text-[#1e293b]">Career Development</h3>
          <p className="text-sm leading-relaxed text-[#475569]">
            Grow your skills through continuous learning, mentorship, and
            opportunities for long-term professional advancement.
          </p>
        </div>

        <div
          className="relative min-h-40 overflow-hidden rounded-2xl"
          style={{ gridArea: "xrayImg" }}
        >
          <Image src="/images/joinus-work2.png" alt="Team reviewing screens" fill className="object-cover" />
        </div>

        <div
          className="rounded-2xl bg-[#dbeafe] p-6"
          style={{ gridArea: "benefits" }}
        >
          <h3 className="mb-2 text-base font-semibold text-[#1e293b]">Competitive Benefits</h3>
          <p className="text-sm leading-relaxed text-[#475569]">
            Receive rewarding benefits designed to recognize your
            contributions and support your personal and professional
            wellbeing.
          </p>
        </div>

        <div
          className="relative min-h-40 overflow-hidden rounded-2xl"
          style={{ gridArea: "doctorsImg" }}
        >
          <Image src="/images/joinus-work1.png" alt="Doctors collaborating" fill className="object-cover" />
        </div>

        <div
          className="rounded-2xl bg-white p-6"
          style={{ gridArea: "collab" }}
        >
          <h3 className="mb-2 text-base font-semibold text-[#1e293b]">Collaborative Culture</h3>
          <p className="text-sm leading-relaxed text-[#475569]">
            Work alongside passionate professionals in a supportive
            environment built on teamwork, respect, and shared success.
          </p>
        </div>

        {/* Modern Healthcare Technology — image + text side by side, spans 2 columns */}
        <div className="grid grid-cols-2 gap-4" style={{ gridArea: "modtech" }}>
          <div className="relative min-h-32 overflow-hidden rounded-2xl">
            <Image src="/images/joinus-work3.png" alt="Handshake" fill className="object-cover" />
          </div>
          <div className="rounded-2xl bg-white p-6">
            <h3 className="mb-2 text-base font-semibold text-[#1e293b]">Modern Healthcare Technology</h3>
            <p className="text-sm leading-relaxed text-[#475569]">
              Deliver exceptional care using advanced healthcare technologies
              and innovative digital solutions.
            </p>
          </div>
        </div>

        <div
          className="rounded-2xl border-2 border-dashed border-[#34d399] bg-[#d1fae5] p-6"
          style={{ gridArea: "flexible" }}
        >
          <h3 className="mb-2 text-base font-semibold text-[#1e293b]">Flexible Work Environment</h3>
          <p className="text-sm leading-relaxed text-[#475569]">
            Enjoy a workplace that supports work-life balance while
            encouraging productivity, wellbeing, and professional growth.
          </p>
        </div>

        <div
          className="rounded-2xl bg-white p-6"
          style={{ gridArea: "patientImpact" }}
        >
          <h3 className="mb-2 text-base font-semibold text-[#1e293b]">Meaningful Patient Impact</h3>
          <p className="text-sm leading-relaxed text-[#475569]">
            Make a positive difference every day by helping deliver
            compassionate, high-quality healthcare to our communities.
          </p>
        </div>

        {/* Pills — spans the full height of all 3 rows, right column */}
        <div
          className="relative h-full min-h-[300px] overflow-hidden rounded-2xl"
          style={{ gridArea: "pills" }}
        >
          <Image src="/images/joinus-pills.png" alt="Pills" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}