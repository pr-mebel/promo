"use client";

import { cn } from "@/lib/utils";
import { CircleCheck } from "@/icons";
import Image from "next/image";
import { useState } from "react";

export const styleOptions = {
  modern: {
    title: "Современный",
    image: "/quiz/style/modern.jpg",
  },
  classic: {
    title: "Классический",
    image: "/quiz/style/classic.jpg",
  },
  neoclassic: {
    title: "Неоклассика",
    image: "/quiz/style/neoclassic.jpg",
  },
  loft: {
    title: "Лофт",
    image: "/quiz/style/loft.jpg",
  },
  other: {
    title: "Другой",
    image: "/quiz/style/other.webp",
  },
  "consultation-needed": {
    title: "Нужна консультация",
    image: "/quiz/style/other.webp",
  },
};

const options = [
  "modern",
  "classic",
  "neoclassic",
  "loft",
  "other",
  "consultation-needed",
];

export const Step2 = () => {
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
      <p className="mb-6 text-2xl lg:text-3xl">
        Какой стиль интерьера вам нравится больше всего?
      </p>
      <div className="flex-grow">
        <div className="flex flex-col justify-between">
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
                  name="style"
                  value={option}
                  checked={selected.includes(option)}
                  className="hidden"
                  onChange={() => handleChange(option)}
                />
                <div
                  className={cn(
                    "relative mb-1 aspect-video h-[190px] w-full",
                    selected.includes(option) && "border border-accent",
                  )}
                >
                  <Image
                    className="pointer-events-none object-cover object-center"
                    src={
                      styleOptions[option as keyof typeof styleOptions]
                        ?.image || ""
                    }
                    alt={
                      styleOptions[option as keyof typeof styleOptions]
                        ?.title || ""
                    }
                    priority
                    fill
                  />
                </div>
                <span className="text-sm lg:text-xl">
                  {styleOptions[option as keyof typeof styleOptions]?.title}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
