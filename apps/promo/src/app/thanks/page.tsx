import { ContactsSection } from "@/sections/contacts";
import { Footer } from "@/sections/footer";
import { Header } from "@/sections/header";
import { HeroThanks } from "@/sections/hero-thanks";

export default function Home() {
  return (
    <>
      <Header />
      <HeroThanks />
      <ContactsSection />
      <Footer />
    </>
  );
}
