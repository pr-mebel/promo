"use client";

import { steps } from "./constants";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { QuizStep } from "./step";
import { useForm } from "./use-form";
import { DesignerMessage } from "./designer-message";
import { FinalStep } from "./final-step";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/card";

const StepContainer = ({
  children,
  active,
}: {
  children: React.ReactNode;
  active: boolean;
}) => (
  <div
    className={cn(
      "absolute inset-0 h-full w-full",
      active ? "z-10 opacity-100" : "opacity-0",
    )}
  >
    {children}
  </div>
);

const Quiz = () => {
  const { step, setStep, formState, setFormState } = useForm();

  const handleNext = () => {
    if (step === steps.length) {
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step === 0) {
      return;
    }
    setStep(step - 1);
  };

  if (step === 6) {
    return <FinalStep />;
  }

  return (
    <div className="grid h-[700px] grid-cols-12 md:h-[1000px] lg:h-[700px]">
      <DesignerMessage className="hidden xl:block" />
      <main className="relative col-span-12 bg-white xl:col-span-9">
        <Progress value={((step + 1) / 7) * 100} className="hidden lg:block" />
        <Card className="h-full">
          <form className="relative flex h-full flex-col justify-end">
            {steps.map((s, i) => (
              <StepContainer key={s.id} active={step === i}>
                <QuizStep
                  {...s}
                  index={i}
                  // @ts-ignore
                  value={formState[s.id]}
                  onChange={(value) => {
                    setFormState((state) => ({
                      ...state,
                      [s.id]: value,
                    }));
                  }}
                />
              </StepContainer>
            ))}
            <div className="relative z-20 flex flex-col gap-5">
              <div>
                <p className="mb-1 text-dark-700 lg:hidden">
                  Вопрос {step + 1}/6
                </p>
                <Progress
                  value={((step + 1) / 7) * 100}
                  className="lg:hidden"
                />
              </div>
              <div className="flex flex-grow justify-end gap-2">
                <Button type="button" className="w-full" onClick={handleBack}>
                  Назад
                </Button>
                <Button
                  type="button"
                  variant="accent"
                  className="w-full"
                  onClick={handleNext}
                >
                  Далее <ArrowRight className="inline w-5" />
                </Button>
              </div>
            </div>
          </form>
        </Card>
      </main>
    </div>
  );
};

export const QuizSection = () => (
  <Section className="bg-dark-100">
    <h2 className="text-3xl font-medium lg:text-4xl">
      Получите индивидуальное предложение по изготовлению корпусной мебели для
      вашего дома
    </h2>
    <h3 className="mb-10 mt-2 text-xl text-dark-700 lg:text-2xl">
      Ответьте на 6 вопросов и{" "}
      <span className="font-bold">рассчитайте стоимость изготовления</span>{" "}
      мебели
    </h3>
    <Quiz />
  </Section>
);
