import Navbar from "@/components/Navbar";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactForm from "@/components/contact/ContactForm";
import MapIntro from "@/components/contact/MapIntro";
import LocationCard from "@/components/contact/LocationCard";
import ContactCta from "@/components/contact/ContactCta";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactHero />
      <ContactInfoCards />
      <ContactForm />
      <MapIntro />
      <LocationCard />
      <ContactCta />
      <Footer />
    </main>
  );
}