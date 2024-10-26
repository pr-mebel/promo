"use server";

import { redirect } from "next/navigation";
import {
  furnitureOptions,
  materialsOptions,
  styleOptions,
  timingOptions,
  designProjectOptions,
  stageOptions,
} from "@/sections/quiz/constants";

type Store = Record<string, { title: string | React.ReactNode }>;

const getOptionLabel = (
  store: Store,
  option: FormDataEntryValue | null,
): string => {
  if (!option) {
    return "unknown-option (must be a bug)";
  }

  const optionData = store[option.toString()];

  if (!optionData) {
    return option.toString();
  }

  const label = optionData.title;

  if (typeof label === "string") {
    return label;
  }

  if (!label) {
    return option.toString();
  }

  // @ts-ignore
  return label?.props?.children as string;
};

export const submitForm = async (formData: FormData) => {
  console.log(formData);

  const pii = {
    name: formData.get("name"),
    phone: formData.get("phone"),
  };

  const quizData: Record<string, string | string[]> = {};
  if (formData.get("isQuiz")) {
    quizData.furniture = formData
      .getAll("furniture")
      .reduce(
        (acc, v) => [...acc, getOptionLabel(furnitureOptions, v)],
        [] as string[],
      );
    quizData.style = formData
      .getAll("style")
      .reduce(
        (acc, v) => [...acc, getOptionLabel(styleOptions, v)],
        [] as string[],
      );
    quizData.designProject = getOptionLabel(
      designProjectOptions,
      formData.get("designProject"),
    );
    quizData.materials = formData
      .getAll("materials")
      .reduce(
        (acc, v) => [...acc, getOptionLabel(materialsOptions, v)],
        [] as string[],
      );
    quizData.stage = getOptionLabel(stageOptions, formData.get("stage"));
    quizData.timing = getOptionLabel(timingOptions, formData.get("timing"));
  }

  console.log({ pii, quizData });

  // return redirect("/thanks");
};
