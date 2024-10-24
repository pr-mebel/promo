import Image from "next/image";
import { Card } from "./card";
import { cards } from "./cards";

export const Advantages = () => {
  return (
    <section className="container py-20">
      <h3 className="uppercase text-dark-700">Преимущества</h3>
      <h2 className="mb-6 text-3xl">Почему нам доверяют</h2>
      {/* mobile */}
      <div className="flex gap-4 overflow-y-scroll md:hidden">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      {/* desktop */}
      <div className="hidden grid-cols-12 grid-rows-3 gap-4 md:grid">
        <div className="relative col-span-4 row-span-full">
          <Image
            src="/advantages.png"
            alt="advantages"
            fill
            priority
            className="h-full w-full object-cover"
          />
        </div>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};
