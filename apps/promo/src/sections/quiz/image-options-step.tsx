import { cn } from "@/lib/utils";
import { ImageOptionProps } from "./constants";
import { CircleCheck } from "@/icons";
import Image from "next/image";
import { useState } from "react";

type ImageOptionsStepProps = {
  name: string;
  options: string[];
  store: Record<string, ImageOptionProps>;
  cols: {
    desktop: number;
    mobile: number;
  };
};

export const QuizStepImageOptions = ({
  name,
  options,
  store,
  cols,
}: ImageOptionsStepProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (option: string) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((v) => v !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  return (
    <div className="flex flex-col justify-between">
      <div className="grid grid-cols-12 gap-x-4 gap-y-5">
        {options.map((option) => (
          <label
            key={option}
            className={cn(
              "relative col-span-4 cursor-pointer",
              cols.desktop === 1 && "lg:col-span-12",
              cols.desktop === 2 && "lg:col-span-6",
              cols.desktop === 3 && "lg:col-span-4",
              cols.mobile === 1 && "col-span-12",
              cols.mobile === 2 && "col-span-6",
              cols.mobile === 3 && "col-span-4",
            )}
          >
            <CircleCheck
              className={cn(
                "absolute right-3 top-3 z-20 h-6 w-6 transition-opacity duration-100",
                selected.includes(option) ? "opacity-100" : "opacity-0",
              )}
            />
            <input
              type="checkbox"
              name={name}
              value={option}
              checked={selected.includes(option)}
              className="hidden"
              onChange={() => handleChange(option)}
            />
            <div
              className={cn(
                "relative mb-1 aspect-video w-full",
                selected.includes(option) && "border border-accent",
              )}
            >
              <Image
                className="pointer-events-none object-cover object-center"
                src={store[option]?.image || ""}
                alt={store[option]?.title || ""}
                priority
                fill
              />
            </div>
            <span className="text-sm lg:text-xl">{store[option]?.title}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
