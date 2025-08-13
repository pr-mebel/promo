"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export const timingOptions = {
  asap: {
    title: "Как можно быстрее",
  },
  "3-months": {
    title: "В течение 3 месяцев",
  },
  "6-months": {
    title: "В течение полугода",
  },
  idk: {
    title: "Пока только присматриваюсь",
  },
};

const options = ["asap", "3-months", "6-months", "idk"];

export const Step6 = () => {
  const [value, onChange] = useState<string[]>([]);

  const handleOnChange = (option: string) => {
    onChange([option]);
  };

  return (
    <div className="flex h-full flex-col">
      <p className="mb-6 text-2xl lg:text-3xl">
        Как скоро&nbsp;Вы хотели&nbsp;бы, чтобы ваш дом был обставлен мебелью?
      </p>
      <div className="flex-grow">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 space-y-4 lg:col-span-6">
            {options.map((option) => (
              <label
                key={option}
                className={cn(
                  "flex cursor-pointer items-center gap-3 border px-3 py-4 lg:px-5 lg:py-6",
                  value.includes(option) && "border-accent",
                )}
              >
                <input
                  type="radio"
                  checked={value.includes(option)}
                  name="timing"
                  value={option}
                  className="hidden"
                  onChange={() => handleOnChange(option)}
                />
                <div
                  className={cn(
                    "relative h-5 w-5 shrink-0 rounded-full border before:absolute before:left-1/2 before:top-1/2 before:h-3 before:w-3 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full",
                    value.includes(option)
                      ? "border-accent before:bg-accent"
                      : "border-dark-500",
                  )}
                />
                <span className="text-sm lg:text-lg">
                  {timingOptions[option as keyof typeof timingOptions]?.title}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
