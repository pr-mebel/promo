import Image from "next/image";
import { Card } from "./card";
import { cards } from "./cards";

export const Advantages = () => (
  <div className="w-full bg-dark-100">
    <section className="pb-10 pt-16 md:container lg:pt-20">
      <div className="max-md:container">
        <h3 className="uppercase text-dark-700">Преимущества</h3>
        <h2 className="mb-6 text-3xl">Почему нам доверяют</h2>
      </div>
      {/* mobile */}
      <div className="flex gap-4 overflow-y-scroll px-4 md:hidden">
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
  </div>
);
