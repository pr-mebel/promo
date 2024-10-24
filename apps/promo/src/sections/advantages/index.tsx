import { Card } from "./card";
import { cards } from "./cards";

export const Advantages = () => {
  return (
    <section className="container py-10">
      <h3 className="uppercase text-dark-700">Преимущества</h3>
      <h2 className="mb-6 text-3xl">Почему нам доверяют</h2>
      <div className="flex gap-4 overflow-y-scroll">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};
