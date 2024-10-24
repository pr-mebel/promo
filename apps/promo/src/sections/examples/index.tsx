import { Button } from "@/components/ui/button";
import { Card } from "./card";
import { getCards } from "./cards";

export const ExamplesSection = async () => {
  const cards = await getCards();
  return (
    <section className="py-10 max-md:container">
      <h3 className="uppercase text-dark-700">Портфолио</h3>
      <h2 className="mb-4 text-3xl font-medium">
        Посмотрите на примеры выполненных нами работ
      </h2>
      <div className="mb-8 flex flex-col gap-6 md:grid md:grid-cols-12 md:gap-0">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div className="md:flex md:justify-center">
        <Button className="max-md:w-full" variant="accent">
          Узнать стоимость
        </Button>
      </div>
    </section>
  );
};
