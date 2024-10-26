import { cn } from "@/lib/utils";
import { TextOptionProps } from "./constants";
import { Check2 } from "@/icons";
import { useState } from "react";

type TextOptionsStepProps = {
  name: string;
  multiple?: boolean;
  options: string[];
  store: Record<string, TextOptionProps>;
  cols: {
    desktop: number;
    mobile: number;
  };
};

export const QuizStepTextOptions = ({
  name,
  options,
  multiple,
  store,
  cols,
}: TextOptionsStepProps) => {
  const [value, onChange] = useState<string[]>([]);
  const handleOnChange = (option: string) => {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((v) => v !== option));
      } else {
        onChange([...value, option]);
      }
      return;
    }

    onChange([option]);
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      {options.map((option) => (
        <label
          key={option}
          className={cn(
            "flex cursor-pointer items-center gap-3 border px-3 py-4 lg:px-5 lg:py-6",
            value.includes(option) && "border-accent",
            cols.desktop === 1 && "lg:col-span-12",
            cols.desktop === 2 && "lg:col-span-6",
            cols.desktop === 3 && "lg:col-span-4",
            cols.mobile === 1 && "col-span-12",
            cols.mobile === 2 && "col-span-6",
            cols.mobile === 3 && "col-span-4",
          )}
        >
          <input
            type={multiple ? "checkbox" : "radio"}
            checked={value.includes(option)}
            name={name}
            value={option}
            className="hidden"
            onChange={() => handleOnChange(option)}
          />
          {multiple ? (
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
          ) : (
            <div
              className={cn(
                "relative h-5 w-5 shrink-0 rounded-full border before:absolute before:left-1/2 before:top-1/2 before:h-3 before:w-3 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full",
                value.includes(option)
                  ? "border-accent before:bg-accent"
                  : "border-dark-500",
              )}
            />
          )}
          <span className="text-sm lg:text-lg">{store[option]?.title}</span>
        </label>
      ))}
    </div>
  );
};
