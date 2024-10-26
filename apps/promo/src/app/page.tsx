import { Advantages } from "@/sections/advantages";
import { Consultation } from "@/sections/consultation";
import { ContactsSection } from "@/sections/contacts";
import { ExamplesSection } from "@/sections/examples";
import { Footer } from "@/sections/footer";
import { Header } from "@/sections/header";
import { Hero } from "@/sections/hero";
import { QuizSection } from "@/sections/quiz";

export default async function Home() {
  return (
    <>
      <Header />
      <Hero />
      <QuizSection />
      <ExamplesSection />
      <Advantages />
      <Consultation />
      <ContactsSection />
      <Footer />
    </>
  );
}
