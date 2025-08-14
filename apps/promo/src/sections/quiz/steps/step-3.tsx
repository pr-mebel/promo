"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const designProjectOptions = {
  "has-design-project": {
    title: "Есть дизайн проект интерьера",
  },
  "has-photos": {
    title: "Есть фото/визуализации понравившейся мебели",
  },
  "in-progress": {
    title: <>Проект в&nbsp;стадии разработки</>,
  },
  "no-design-project": {
    title: "Ничего нет, нужен дизайн-проект",
  },
};

const options = [
  "has-design-project",
  "has-photos",
  "in-progress",
  "no-design-project",
];

export const Step3 = () => {
  const [value, onChange] = useState<string[]>([]);

  const handleOnChange = (option: string) => {
    onChange([option]);
  };

  return (
    <div className="flex h-full flex-col">
      <p className="mb-6 text-2xl lg:text-3xl">
        Есть&nbsp;ли у&nbsp;вас дизайн-проект интерьера или мебели?
      </p>
      <ScrollArea className="flex-grow">
        <div className="grid grid-cols-12 gap-4 pb-10">
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
                  name="designProject"
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
                  {
                    designProjectOptions[
                      option as keyof typeof designProjectOptions
                    ]?.title
                  }
                </span>
              </label>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};
