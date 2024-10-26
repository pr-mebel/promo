import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const HeroThanks = () => (
  <section className="relative z-10 h-[90vh] w-full pb-14 lg:h-[70vh]">
    <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-t from-[#000000e5] via-[#000000c7] via-30%" />
    <div className="absolute h-full w-full">
      <Image
        src="/hero-mobile.png"
        priority
        fill
        alt="hero"
        style={{ objectFit: "cover" }}
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
    <div className="container relative z-10 flex h-full flex-col justify-end text-white">
      <h1 className="max-w-[660px] text-4xl font-medium uppercase lg:text-5xl">
        Спасибо, мы&nbsp;получили вашу заявку
      </h1>
      <p className="mb-10 mt-4 max-w-[660px] text-xl">
        Наш дизайнер внимательно изучит ваши ответы и&nbsp;в&nbsp;ближайшее
        время свяжется с&nbsp;вами
      </p>
      <Link href="/">
        <Button variant="accent" className="w-full lg:w-auto">
          Вернуться на главную
        </Button>
      </Link>
    </div>
  </section>
);
