"use client";
import { useState } from "react";
import { CalendarCheck, Building2, ArrowRight } from "lucide-react";

const helpItems = [
  {
    icon: CalendarCheck,
    title: "Appointment Assistance",
    description: "Need to reschedule or find a specific specialist? We provide fast-track booking support.",
  },
  {
    icon: Building2,
    title: "Corporate Healthcare",
    description: "Inquire about our premium wellness packages designed for corporate partners and executives.",
  },
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    setSubmitted(true);
  };

  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto grid max-w-10xl h-[560px] grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Left column — heading + bullets */}
        <div>
          <p className="mb-16 text-20sm font-semibold text-[#00a6a6]">We&apos;re Here to Help</p>
          <h2 className="mb-8 text-3xl font-extrabold text-[#1e293b] md:text-4xl">How Can We Help?</h2>
          <p className="mb-10 max-w-sm text-sm leading-relaxed text-[#475569]">
            Our dedicated patient experience team ensures your inquiries are
            handled with priority and precision.
          </p>

          <div className="flex flex-col gap-6">
            {helpItems.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-3">
                <span className="flex h-9 w-9 ml-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#eaf3fb] text-[#1565c0]">
                  <Icon size={16} strokeWidth={2} />
                </span>
                <div>
                  <h3 className="mb-1 text-10xs font-semibold text-[#1e293b]">{title}</h3>
                  <p className="text-10xs leading-relaxed text-[#64748b]">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — form card */}
        <div className="h-full rounded-2xl bg-[#f8fafc] p-6 md:p-8">
          {submitted ? (
            <p className="text-base font-semibold text-[#1565c0]">
              Thanks for reaching out — our team will get back to you shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-6 block text-xs font-medium text-[#1e293b]">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={handleChange("name")}
                  required
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#1565c0]"
                />
              </div>
              <div>
                <label className="mb-6 block text-xs font-medium text-[#1e293b]">Phone Number</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  required
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#1565c0]"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-6 block text-xs font-medium text-[#1e293b]">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  required
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#1565c0]"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-6 block text-xs font-medium text-[#1e293b]">Message</label>
                <textarea
                  value={form.message}
                  onChange={handleChange("message")}
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#1565c0]"
                />
              </div>
              <button
                type="submit"
                className="flex w-fit items-center gap-6 mt-20 ml-50 rounded-full bg-[#1565c0] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#11509e] sm:col-span-2"
              >
                Send Message
                <span className="flex h-6 w-6  items-center justify-center rounded-full bg-white">
                  <ArrowRight size={14} className="text-[#1565c0]" strokeWidth={2.5} />
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}