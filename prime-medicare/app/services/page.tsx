import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceCategoriesGrid from "@/components/services/ServiceCategoriesGrid";
import HomeCareSection from "@/components/services/HomeCareSection";
import ServicesFaq from "@/components/services/ServicesFaq";
import AppointmentCta from "@/components/services/AppointmentCta";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <ServicesHero />
      <ServiceCategoriesGrid />
      <HomeCareSection />
      <ServicesFaq />
      <AppointmentCta />
      <Footer />
    </main>
  );
}