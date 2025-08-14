"use client";

import { cn } from "@/lib/utils";
import { CircleCheck } from "@/icons";
import Image from "next/image";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export const furnitureOptions = {
  kitchen: {
    title: "Кухня",
    image: "/quiz/furniture/1.jpg",
  },
  "main-room": {
    title: "Гостиная",
    image: "/quiz/furniture/2.jpg",
  },
  bedroom: {
    title: "Шкафы",
    image: "/quiz/furniture/3.jpg",
  },
  wardrobe: {
    title: "Гардеробная",
    image: "/quiz/furniture/4.jpg",
  },
  bathroom: {
    title: "Ванная",
    image: "/quiz/furniture/5.jpg",
  },
  custom: {
    title: "Нужно укомплектовать под ключ",
    image: "/quiz/furniture/6.jpg",
  },
};

const options = [
  "kitchen",
  "main-room",
  "bedroom",
  "wardrobe",
  "bathroom",
  "custom",
];

export const Step1 = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (option: string) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((v) => v !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  return (
    <div className="flex h-full flex-col">
      <p className="mb-6 text-2xl lg:text-3xl">Какая мебель Вам нужна?</p>
      <ScrollArea className="flex-grow">
        <div className="flex flex-col justify-between pb-10">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-5">
            {options.map((option) => (
              <label key={option} className="relative cursor-pointer">
                <CircleCheck
                  className={cn(
                    "absolute right-3 top-3 z-20 h-6 w-6 transition-opacity duration-100",
                    selected.includes(option) ? "opacity-100" : "opacity-0",
                  )}
                />
                <input
                  type="checkbox"
                  name="furniture"
                  value={option}
                  checked={selected.includes(option)}
                  className="hidden"
                  onChange={() => handleChange(option)}
                />
                <div
                  className={cn(
                    "relative mb-1 aspect-square w-full md:aspect-video md:h-[190px]",
                    selected.includes(option) && "border border-accent",
                  )}
                >
                  <Image
                    className="pointer-events-none object-cover object-center"
                    src={
                      furnitureOptions[option as keyof typeof furnitureOptions]
                        ?.image || ""
                    }
                    alt={
                      furnitureOptions[option as keyof typeof furnitureOptions]
                        ?.title || ""
                    }
                    priority
                    fill
                  />
                </div>
                <span className="text-sm lg:text-xl">
                  {
                    furnitureOptions[option as keyof typeof furnitureOptions]
                      ?.title
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
