import Image from "next/image";
import { ArrowRight, Phone1, PinPoint } from "../../icons";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="z-50 w-full bg-dark-100 text-dark-900 md:px-10 md:py-8">
      {/* mobile header content */}
      <div className="container mx-auto flex h-16 justify-between md:hidden">
        <div className="relative h-16 w-[100px]">
          <Link href="/" className="cursor-pointer">
            <Image src="/logo.svg" fill priority alt="logo" />
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-xl font-medium">
            <a href="tel:+74959663916">+7 (495) 966-39-16</a>
          </p>
          <button className="cursor-pointer">
            <svg width="28" height="15" viewBox="0 0 28 15" fill="none">
              <rect y="0.5" width="28" height="2" className="fill-dark-900" />
              <rect y="6.5" width="28" height="2" className="fill-dark-900" />
              <rect y="12.5" width="28" height="2" className="fill-dark-900" />
            </svg>
          </button>
        </div>
      </div>
      {/* desktop header content */}
      <div className="container mx-auto hidden h-16 justify-between md:flex">
        <div className="flex gap-4">
          <div className="relative h-16 w-[100px] md:w-[220px]">
            <Link href="/" className="cursor-pointer">
              <Image src="/logo.svg" fill priority alt="logo" />
            </Link>
          </div>
          <div className="w-[1px] bg-[#E7E7E7]" />
          <p>
            Более 20 лет создаем
            <br />
            мебель для интерьеров
            <br />
            премиум класса
          </p>
        </div>
        <div className="flex justify-between gap-16">
          <div className="flex items-start gap-2">
            <PinPoint className="w-10" />
            <div>
              <p className="underline">
                Наш салон: г. Москва, м. Сокол,
                <br /> ул. Балтийская, д. 9
              </p>
              <p>Время работы: 10:00 - 20:00</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Phone1 className="w-10" />
            <p className="underline">
              Напишите нам,
              <br />
              ответим в течение
              <br /> 1 минуты
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <p className="text-3xl font-bold">
            <a href="tel:+74959663916">+7 (495) 966-39-16</a>
          </p>
          <p className="flex items-end gap-2 underline">
            <a className="text-sm">Заказать звонок</a>
            <ArrowRight className="inline w-5" />
          </p>
        </div>
      </div>
    </header>
  );
};
