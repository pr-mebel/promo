"use client";

import { cn } from "@/lib/utils";
import { Check2 } from "@/icons";
import { useState } from "react";

export const materialsOptions = {
  ldsp: {
    title: "ЛДСП",
  },
  shpon: {
    title: "Шпон",
  },
  enamel: {
    title: "Эмаль",
  },
  latun: {
    title: "Латунь",
  },
  metal: {
    title: "Металл",
  },
  glass: {
    title: "Стекло",
  },
  idk: {
    title: "Затрудняюсь ответить",
  },
};

const options = ["ldsp", "shpon", "enamel", "latun", "metal", "glass", "idk"];

export const Step4 = () => {
  const [value, onChange] = useState<string[]>([]);

  const handleOnChange = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter((v) => v !== option));
    } else {
      onChange([...value, option]);
    }
  };

  return (
    <div className="flex h-full flex-col">
      <p className="mb-6 text-2xl lg:text-3xl">
        Какие материалы в&nbsp;мебели для Вас предпочтительны?
      </p>
      <div className="flex-grow">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {options.map((option) => (
            <label
              key={option}
              className={cn(
                "flex cursor-pointer items-center gap-3 border px-3 py-4 lg:px-5 lg:py-6",
                value.includes(option) && "border-accent",
              )}
            >
              <input
                type="checkbox"
                checked={value.includes(option)}
                name="materials"
                value={option}
                className="hidden"
                onChange={() => handleOnChange(option)}
              />
              <div
                className={cn(
                  "relative h-5 w-5 shrink-0 border-2 lg:h-6 lg:w-6",
                  value.includes(option) ? "border-accent" : "border-dark-500",
                )}
              >
                {value.includes(option) && (
                  <Check2 className="absolute left-1/2 top-1/2 h-[8px] w-[12px] -translate-x-1/2 -translate-y-1/2" />
                )}
              </div>
              <span className="text-sm lg:text-lg">
                {
                  materialsOptions[option as keyof typeof materialsOptions]
                    ?.title
                }
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
