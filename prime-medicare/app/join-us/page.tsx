import Navbar from "@/components/Navbar";
import JoinUsHero from "@/components/join-us/JoinUsHero";
import WhyJoinSection from "@/components/join-us/WhyJoinSection";
import Vacancies from "@/components/join-us/Vacancies";
import AppointmentCta from "@/components/join-us/AppointmentCta";
import Footer from "@/components/Footer";

export default function JoinUsPage() {
  return (
    <main>
      <Navbar />
      <JoinUsHero />
      <WhyJoinSection />
      <Vacancies />
      <AppointmentCta />
      <Footer />
    </main>
  );
}