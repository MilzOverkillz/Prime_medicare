
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import DoctorSpotlight from "@/components/home/DoctorSpotlight";
import Partners from "@/components/home/Partners";
import AppointmentCta from "@/components/home/AppointmentCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <DoctorSpotlight />
      <Partners />
      <AppointmentCta />
      <Footer/>
    </main>
  );
}