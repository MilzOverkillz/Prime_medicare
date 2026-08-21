import Image from "next/image";

export default function ContactCta() {
  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-10xl h-[565px] mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-[#1e293b] font-extrabold text-5xl md:text-6xl leading-[68px] mb-8">
            Your Care Starts With a Conversation
          </h1>
          <p className="text-[#000000] font-medium text-lg leading-7 mr-10 mb-10">
            Connect with Prime Medicare for trusted guidance, personalized healthcare
            support, and convenient access to the services you need—because better care
            begins with the right conversation and meaningful connection.
          </p>
          <button className="bg-[#1565c0] text-[#f8fafc] font-semibold text-base flex items-center gap-3 rounded-full px-6 py-3 hover:bg-[#135aa8] transition-colors">
            <span>Book an Appointment</span>
            <div className="bg-[#f8fafc] w-9 h-9 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-[#1565c0]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Image placeholder – replace src with actual image path */}
        <div className="w-full md:w-[431px] h-[438px] rounded-lg overflow-hidden">
          {/* Example placeholder image; remove if not needed */}
          <Image
            src="/images/contact-cta.png"
            alt="Contact illustration"
            width={431}
            height={438}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}