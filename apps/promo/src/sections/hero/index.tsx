import { Button } from "@/components/ui/button";
import Image from "next/image";

const Component1 = ({ children }: { children: React.ReactNode }) => (
  <p className="relative before:absolute before:-left-3 before:h-full before:w-[1px] before:bg-dark-600">
    {children}
  </p>
);

export const Hero = () => (
  <section className="relative h-[100vh] w-full bg-gradient-to-t from-[#000000e5] via-[#000000c7] via-30% pb-14 md:h-[70vh]">
    <Image
      src="/hero-mobile.png"
      priority
      fill
      alt="hero"
      style={{ objectFit: "cover", zIndex: -1 }}
      className="md:hidden"
    />
    <Image
      src="/hero.png"
      priority
      fill
      alt="hero"
      style={{ objectFit: "cover", zIndex: -1 }}
      className="hidden md:block"
    />
    <div className="container mx-auto flex h-full flex-col justify-end text-white">
      <div className="">
        <h1 className="text-4xl font-medium uppercase md:text-5xl">
          Изготовим на&nbsp;заказ мебель премиум класса
        </h1>
        <p className="mt-2 text-xl font-light md:text-2xl">
          которой&nbsp;Вы будете восхищаться, а&nbsp;Ваши друзья завидовать
        </p>
        <div className="mb-8 mt-3 h-[1px] w-full bg-gradient-to-l from-[#20202000] via-[#6A6A6ABA] via-[73%] to-dark-600" />
        <p className="w-fit border border-accent/60 bg-accent/10 p-1 text-sm font-light">
          Не&nbsp;знаете, какой бюджет нужен для вашего проекта?
        </p>
        <p className="mt-2 text-xl">
          Пройдите тест и&nbsp;получите индивидуальный дизайн-проект
          и&nbsp;точную стоимость вашей мебели в&nbsp;течение 24&nbsp;часов
        </p>
        <div className="mt-6 flex justify-between">
          <Button variant="accent" className="w-full md:w-auto">
            Узнать стоимость
          </Button>
          <div className="hidden items-end gap-6 md:flex">
            <Component1>Обустраиваем 100+ интерьеров в&nbsp;год</Component1>
            <Component1>Дизайнеры с&nbsp;опытом более 10&nbsp;лет</Component1>
            <Component1>Проекты любой сложности</Component1>
            <Component1>Работаем по эскизам и фото</Component1>
          </div>
        </div>
      </div>
    </div>
  </section>
);
