import { Button } from "@/components/ui/button";
import { Card } from "./card";
import { cards } from "./cards";

export const ExamplesSection = () => {
  return (
    <section className="container pb-10">
      <h3 className="uppercase text-dark-700">Портфолио</h3>
      <h2 className="mb-4 text-3xl font-medium">
        Посмотрите на примеры выполненных нами работ
      </h2>
      <div className="mb-8 flex flex-col gap-6">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <Button className="w-full" variant="accent">
        Узнать стоимость
      </Button>
    </section>
  );
};
