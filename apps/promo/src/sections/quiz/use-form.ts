import { useState } from "react";

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

export const useForm = () => {
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

  return {
    step,
    setStep,
    formState,
    setFormState,
  };
};
