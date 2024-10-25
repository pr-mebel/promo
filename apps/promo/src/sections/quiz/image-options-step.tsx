import { cn } from "@/lib/utils";
import { ImageOptionProps } from "./constants";
import { CircleCheck } from "@/icons";
import Image from "next/image";

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

export const QuizStepImageOptions = ({
  options,
  store,
  value,
  cols,
  onChange,
}: ImageOptionsStepProps) => (
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
            className={cn(
              "relative mb-1 aspect-video w-full",
              value.includes(option) && "border border-accent",
            )}
          >
            <Image
              className="pointer-events-none object-cover object-center"
              src={store[option]?.image || ""}
              alt={store[option]?.title || ""}
              priority
              fill
              // quality={30}
            />
          </div>
          <span className="text-sm lg:text-xl">{store[option]?.title}</span>
        </label>
      ))}
    </div>
  </div>
);
