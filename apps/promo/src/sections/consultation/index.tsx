import Image from "next/image";

export const Consultation = () => (
  <section className="container bg-dark-100 pb-20">
    <h3 className="mb-5 uppercase text-dark-700">консультация дизайнера</h3>
    <h2 className="mb-10 text-3xl font-medium md:text-4xl">
      Получите бесплатно консультацию профессионального дизайнера по мебели с
      опытом работы 10 лет
    </h2>
    <div className="w-full bg-white px-6 py-12">
      <div className="relative h-[20vh] w-full via-30% md:h-[70vh]">
        <Image
          src="/consultation-mobile.png"
          priority
          alt="consultation"
          fill
          style={{ objectFit: "cover" }}
          className="md:hidden"
        />
        <Image
          src="/consultation.png"
          priority
          alt="consultation"
          fill
          style={{ objectFit: "cover" }}
          className="hidden md:block"
        />
      </div>
      <div className="py-12">
        <p className="mb-6 text-2xl md:text-3xl">На консультации Вы узнаете:</p>
        <div className="flex">
          <div className="mr-2 h-9 w-9 bg-slate-400"></div>
          <p className="pb-4 text-xl font-light md:text-2xl">
            На что важно обратить внимание на этапе ремонта
          </p>
        </div>
        <div className="flex">
          <div className="mr-2 h-9 w-9 bg-slate-400"></div>
          <p className="pb-4 text-xl font-light md:text-2xl">
            Как сделать мебель функциональной и эргономичной
          </p>
        </div>
        <div className="flex">
          <div className="mr-2 h-9 w-9 bg-slate-400"></div>
          <p className="text-xl font-light md:text-2xl">
            Как можно оптимизировать бюджет проекта без потери качества
          </p>
        </div>
      </div>
      <div>
        <input
          placeholder="Введите номер телефона"
          className="mb-3 w-full border border-black px-12 py-6 font-medium text-white md:w-auto"
        ></input>
        <button className="w-full bg-accent px-12 py-6 font-medium text-white md:w-auto">
          Получить консультацию
        </button>
      </div>
    </div>
  </section>
);
