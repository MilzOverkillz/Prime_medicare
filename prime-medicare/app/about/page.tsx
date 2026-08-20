import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/about/AboutStats";
import GlobalNetwork from "@/components/about/GlobalNetwork";
import Mission from "@/components/about/Mission";
import Values from "@/components/about/Values";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import BetterAccessCta from "@/components/about/BetterAccessCta";
import OurTeamSection from "@/components/about/OurTeamSection";
import Certifications from "@/components/about/Certifications";
import AppointmentCta from "@/components/about/AppointmentCta";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <AboutStats />
      <GlobalNetwork />
      <Mission />
      <Values />
      <WhyChooseUs />
      <BetterAccessCta />
      <OurTeamSection />
      <Certifications />
      <AppointmentCta />
      <Footer />
    </main>
  );
}