import {
  Advantages,
  ExamplesSection,
  Header,
  Hero,
  QuizSection,
  Consultation,
  ContactsSection,
  Footer,
} from "../sections";

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
