import { Button } from "@/components/ui/button";
import { Card } from "./card";
import { getCards } from "./cards";
import { Section } from "@/components/section";
import { DialogForm } from "../dialog-form";

export const ExamplesSection = async () => {
  const cards = await getCards();
  return (
    <Section className="items-center bg-white max-md:container md:flex md:flex-col">
      <h3 className="uppercase text-dark-700 md:mb-3">Портфолио</h3>
      <h2 className="mb-4 text-3xl font-medium md:mb-6">
        Посмотрите на примеры выполненных нами работ
      </h2>
      <div className="mb-8 flex max-w-7xl flex-col gap-6 md:grid md:grid-cols-12 md:gap-0">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div className="md:flex md:justify-center">
        <DialogForm>
          <Button className="max-md:w-full" variant="accent">
            Узнать стоимость
          </Button>
        </DialogForm>
      </div>
    </Section>
  );
};
