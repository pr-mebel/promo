import { Button } from "@/components/ui/button";
import Image from "next/image";
import { DialogForm } from "../dialog-form";
import styles from "./hero.module.css";
import { cn } from "@/lib/utils";

const Component1 = ({ children }: { children: React.ReactNode }) => (
  <p className="relative max-w-[160px] before:absolute before:-left-3 before:h-full before:w-[1px] before:bg-accent/70 xl:max-w-[180px]">
    {children}
  </p>
);

export const Hero = () => (
  <section className="relative z-10 h-screen w-full pb-14 lg:pb-20">
    <div
      className={cn(
        "absolute z-10 h-full w-full from-[#000000e5] via-[#000000c7] max-lg:inset-0 lg:bg-gradient-to-r lg:from-[#000000e5] lg:via-[#000000c7] lg:via-20%",
        styles.gradient,
      )}
    />
    <div className="absolute h-1/2 w-full lg:h-full">
      <Image
        src="/hero.jpg"
        priority
        fill
        alt="hero"
        style={{ objectFit: "cover", objectPosition: "right 50px" }}
        className="lg:hidden"
      />
      <Image
        src="/hero.jpg"
        priority
        fill
        alt="hero"
        style={{ objectFit: "cover" }}
        className="hidden lg:block"
      />
    </div>
    <div className="container relative z-10 mx-auto flex h-full flex-col justify-end text-white">
      <h1 className="text-4xl font-medium uppercase lg:text-5xl">
        Изготовим на&nbsp;заказ <br className="hidden lg:block" />
        мебель премиум класса
      </h1>
      <p className="mt-2 text-xl font-light lg:text-2xl">
        которой&nbsp;Вы будете восхищаться, <br className="lg:hidden" />
        а&nbsp;Ваши друзья завидовать
      </p>
      <div className="mb-8 mt-3 h-[1px] w-full bg-gradient-to-l from-[#20202000] via-[#6A6A6ABA] via-[73%] to-dark-600" />
      <div className="mt-12 hidden items-end gap-6 pl-3 lg:flex">
        <Component1>Обустраиваем 100+ интерьеров в&nbsp;год</Component1>
        <Component1>Дизайнеры с&nbsp;опытом более 10&nbsp;лет</Component1>
        <Component1>Проекты любой сложности</Component1>
        <Component1>Работаем по эскизам и фото</Component1>
      </div>
      <p className="text-sm font-medium lg:mt-24 lg:text-xl">
        Не&nbsp;знаете, какой бюджет нужен для вашего проекта?
      </p>
      <DialogForm>
        <Button variant="accent" className="mt-4 w-full lg:w-fit">
          Узнать стоимость
        </Button>
      </DialogForm>
      <p className="lg:text-md mt-4 text-lg font-light">
        Пройдите тест и&nbsp;получите индивидуальный дизайн-проект{" "}
        <br className="hidden lg:block" />
        и&nbsp;точную стоимость вашей мебели в&nbsp;течение 24&nbsp;часов
      </p>
    </div>
  </section>
);
