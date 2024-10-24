"use client";

import { clsx } from "clsx";
import Image from "next/image";
import { useState } from "react";
import {
  ImageOptionProps,
  StepData,
  steps,
  TextOptionProps,
} from "./constants";
import { Check2, CircleCheck } from "../../icons";

type ImageOptionsStepProps = {
  value: string[];
  options: string[];
  store: Record<string, ImageOptionProps>;
  cols: {
    desktop: number;
    mobile: number;
  };
  onChange: (value: string[]) => void;
};

type TextOptionsStepProps = {
  name: string;
  value: string[];
  multiple?: boolean;
  options: string[];
  store: Record<string, TextOptionProps>;
  cols: {
    desktop: number;
    mobile: number;
  };
  onChange: (value: string[]) => void;
};

const QuizStepImageOptions = ({
  options,
  store,
  value,
  cols,
  onChange,
}: ImageOptionsStepProps) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="grid grid-cols-12 gap-x-4 gap-y-5">
        {options.map((option) => (
          <label
            key={option}
            className={clsx(
              "relative col-span-4 cursor-pointer",
              cols.desktop === 1 && "md:col-span-12",
              cols.desktop === 2 && "md:col-span-6",
              cols.desktop === 3 && "md:col-span-4",
              cols.mobile === 1 && "col-span-12",
              cols.mobile === 2 && "col-span-6",
              cols.mobile === 3 && "col-span-4",
            )}
          >
            <CircleCheck
              className={clsx(
                "absolute right-3 top-3 z-20 h-6 w-6 transition-opacity duration-100",
                value.includes(option) ? "opacity-100" : "opacity-0",
              )}
            />
            <input
              type="checkbox"
              checked={value.includes(option)}
              className="hidden"
              onChange={(e) => {
                if (e.target.checked) {
                  onChange([...value, option]);
                } else {
                  onChange(value.filter((v) => v !== option));
                }
              }}
            />
            <div
              className={clsx(
                "relative mb-1 aspect-video w-full",
                value.includes(option) && "border border-accent",
              )}
            >
              <img
                className="pointer-events-none absolute h-full w-full object-cover"
                src={store[option]?.image || ""}
                alt={store[option]?.title || ""}
              />
            </div>
            <span className="text-sm md:text-xl">{store[option]?.title}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
const QuizStepTextOptions = ({
  name,
  value,
  options,
  multiple,
  store,
  cols,
  onChange,
}: TextOptionsStepProps) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {options.map((option) => (
        <label
          key={option}
          className={clsx(
            "flex cursor-pointer items-center gap-3 border px-3 py-4 md:px-5 md:py-6",
            value.includes(option) && "border-accent",
            cols.desktop === 1 && "md:col-span-12",
            cols.desktop === 2 && "md:col-span-6",
            cols.desktop === 3 && "md:col-span-4",
            cols.mobile === 1 && "col-span-12",
            cols.mobile === 2 && "col-span-6",
            cols.mobile === 3 && "col-span-4",
          )}
        >
          <input
            type={multiple ? "checkbox" : "radio"}
            checked={value.includes(option)}
            name={name}
            className="hidden"
            onChange={(e) => {
              if (multiple) {
                if (e.target.checked) {
                  onChange([...value, option]);
                } else {
                  onChange(value.filter((v) => v !== option));
                }
                return;
              }

              onChange([option]);
            }}
          />
          {multiple ? (
            <div
              className={clsx(
                "relative h-5 w-5 border-2 md:h-6 md:w-6",
                value.includes(option) ? "border-accent" : "border-dark-500",
              )}
            >
              {value.includes(option) && (
                <Check2 className="absolute left-1/2 top-1/2 h-[8px] w-[12px] -translate-x-1/2 -translate-y-1/2" />
              )}
            </div>
          ) : (
            <div
              className={clsx(
                "relative h-5 w-5 rounded-full border before:absolute before:left-1/2 before:top-1/2 before:h-3 before:w-3 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full",
                value.includes(option)
                  ? "border-accent before:bg-accent"
                  : "border-dark-500",
              )}
            />
          )}
          <span className="text-sm md:text-lg">{store[option]?.title}</span>
        </label>
      ))}
    </div>
  );
};

type StepProps = StepData & {
  value: string[];
  index: number;
  onBack: () => void;
  onNext: () => void;
  onChange: (value: string[]) => void;
};

const QuizStep = ({ value, onChange, onBack, onNext, ...props }: StepProps) => (
  <div className="flex h-full flex-col">
    <p className="mb-6 text-2xl md:text-3xl">{props.question}</p>
    <div className="flex-grow">
      {props.kind === "image-options" && (
        <QuizStepImageOptions
          options={props.options}
          store={props.store}
          value={value}
          cols={props.cols}
          onChange={onChange}
        />
      )}
      {props.kind === "text-options" && (
        <QuizStepTextOptions
          name={props.id}
          options={props.options}
          multiple={props.multiple}
          store={props.store}
          value={value}
          cols={props.cols}
          onChange={onChange}
        />
      )}
    </div>
    <div className="flex items-end justify-between">
      <p className="hidden md:block">Вопрос {props.index + 1}/6</p>
      <div className="flex flex-grow justify-end gap-2">
        <button
          type="button"
          className="w-full cursor-pointer border border-dark-500 px-4 py-2 font-medium uppercase text-dark-500"
          onClick={onBack}
        >
          Назад
        </button>
        <button
          type="button"
          className="w-full cursor-pointer bg-accent px-4 py-2 font-medium uppercase text-white"
          onClick={onNext}
        >
          Далее
        </button>
      </div>
    </div>
  </div>
);

type FormState = {
  furniture: string[];
  style: string[];
  designProject: string[];
  materials: string[];
  stage: string[];
  timing: string[];
  phone: string;
  name: string;
};

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [formState, setFormState] = useState<FormState>({
    furniture: [],
    style: [],
    designProject: [],
    materials: [],
    stage: [],
    timing: [],
    phone: "",
    name: "",
  });

  if (step === 6) {
    return (
      <div className="grid grid-cols-12">
        <aside className="col-span-5">
          <img src="https://via.placeholder.com/150" alt="user" />
        </aside>
        <main>
          <div>
            <p>
              Начали рассчитывать
              <br />
              бюджет вашего проекта
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="grid h-[700px] grid-cols-12">
      <aside className="col-span-3 hidden bg-dark-300 px-8 pt-10 md:block">
        <div className="h-16 w-16 bg-slate-900" />
        <div className="mt-4 bg-white px-4 pb-6 pt-4">
          <p className="text-xl">Имя Фамилия</p>
          <p className="text-sm">дизайнер интерьера</p>
          <p>
            Мы производим корпусную мебель любой сложности под заказ по
            индивидуальному проекту, в нашем портфолио более 300+ проектов
          </p>
        </div>
      </aside>
      <main className="relative col-span-12 bg-white md:col-span-9">
        <div
          className={clsx(
            "absolute left-0 top-0 h-2 w-full before:absolute before:left-0 before:top-0 before:h-2 before:bg-accent before:transition-[width]",
            step === 0 && "before:w-1/6",
            step === 1 && "before:w-1/3",
            step === 2 && "before:w-1/2",
            step === 3 && "before:w-2/3",
            step === 4 && "before:w-5/6",
            step === 5 && "before:w-full",
          )}
        />
        <form className="relative h-full pt-2">
          {steps.map((s, i) => (
            <div
              key={s.id}
              className={clsx(
                "absolute left-0 top-0 h-full w-full px-5 py-6 md:px-8 md:py-5",
                step === i ? "z-10 opacity-100" : "opacity-0",
              )}
            >
              <QuizStep
                {...s}
                index={i}
                // @ts-ignore
                value={formState[s.id]}
                onChange={(value) => {
                  setFormState((state) => ({
                    ...state,
                    [s.id]: value,
                  }));
                }}
                onBack={() => {
                  if (step === 0) {
                    return;
                  }
                  setStep(step - 1);
                }}
                onNext={() => {
                  if (step === steps.length - 1) {
                    return;
                  }
                  setStep(step + 1);
                }}
              />
            </div>
          ))}
        </form>
      </main>
    </div>
  );
};

export const QuizSection = () => {
  return (
    <section className="bg-dark-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-medium md:text-4xl">
          Получите индивидуальное предложение
        </h2>
        <h3 className="mb-10 mt-2 text-xl text-dark-700 md:text-2xl">
          Ответьте на 6 вопросов и{" "}
          <span className="font-bold">рассчитайте стоимость изготовления</span>{" "}
          мебели
        </h3>
        <Quiz />
      </div>
    </section>
  );
};
