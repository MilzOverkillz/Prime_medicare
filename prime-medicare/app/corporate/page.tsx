import Navbar from "@/components/Navbar";
import CorporateHero from "@/components/corporate/CorporateHero";
import CorporateHelp from "@/components/corporate/CorporateHelp";
import BusinessBenefits from "@/components/corporate/BusinessBenefits";
import AppointmentCta from "@/components/about/AppointmentCta";
import Footer from "@/components/Footer";

export default function CorporatePage() {
  return (
    <main>
      <Navbar />
      <CorporateHero />
      <CorporateHelp />
      <BusinessBenefits />
      <AppointmentCta />
      <Footer/>
    </main>
  );
}