"use client";

import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Step1 } from "./steps/step-1";
import { Step2 } from "./steps/step-2";
import { Step3 } from "./steps/step-3";
import { Step4 } from "./steps/step-4";
import { Step5 } from "./steps/step-5";
import { Step6 } from "./steps/step-6";
import { DesignerMessage } from "./designer-message";
import { FinalStep } from "./steps/final-step";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/card";
import { submitForm } from "@/server";
import { useState } from "react";
import { Goal, useMetrika } from "@/hooks/use-metrika";

const stepComponents = [
  <Step1 key="step-1" />,
  <Step2 key="step-2" />,
  <Step3 key="step-3" />,
  <Step4 key="step-4" />,
  <Step5 key="step-5" />,
  <Step6 key="step-6" />,
];

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [visited, setVisited] = useState<number[]>([]);
  const m = useMetrika();

  const handleAnalytics = (step: number) => {
    if (!visited.includes(step)) {
      m.track(("promo/quiz/step/" + step + 1) as Goal);
      setVisited([...visited, step]);
    }
  };

  const handleNext = () => {
    if (step === stepComponents.length) {
      return;
    }
    setStep(step + 1);
    handleAnalytics(step);
  };

  const handleBack = () => {
    if (step === 0) {
      return;
    }
    setStep(step - 1);
  };

  return (
    <>
      <input type="hidden" name="isQuiz" value="true" />
      {step === 6 ? (
        <FinalStep />
      ) : (
        <div className="grid h-full grid-cols-12 bg-white">
          <DesignerMessage className="hidden xl:block" />
          <main className="relative col-span-12 h-full xl:col-span-9">
            <Progress
              value={((step + 1) / 7) * 100}
              className="absolute z-10 hidden lg:block"
            />
            <Card className="relative flex h-full flex-col gap-4 md:h-full lg:grid lg:grid-rows-[1fr_auto]">
              {stepComponents.map((stepComponent, i) => (
                <div
                  key={`step-${i}`}
                  className={cn(
                    "relative hidden w-full flex-grow overflow-hidden",
                    {
                      block: step === i,
                    },
                  )}
                >
                  <div className="absolute inset-0">{stepComponent}</div>
                  <div className="pointer-events-none absolute -bottom-4 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
                </div>
              ))}
              <div className="flex flex-shrink-0 flex-col gap-5">
                <div>
                  <p className="mb-1 text-dark-700 lg:hidden">
                    Вопрос {step + 1}/6
                  </p>
                  <Progress
                    value={((step + 1) / 7) * 100}
                    className="lg:hidden"
                  />
                </div>
                <div className="flex items-end justify-between">
                  <p className="mb-1 hidden text-dark-700 lg:block">
                    Вопрос {step + 1}/6
                  </p>
                  <div className="flex flex-grow justify-end gap-2">
                    <Button
                      type="button"
                      className="w-full lg:w-auto"
                      onClick={handleBack}
                    >
                      Назад
                    </Button>
                    <Button
                      type="button"
                      variant="accent"
                      className="w-full lg:w-auto"
                      onClick={handleNext}
                    >
                      Далее <ArrowRight className="inline w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </main>
        </div>
      )}
    </>
  );
};

export const QuizSection = () => {
  const m = useMetrika();

  const handleSubmit = () => {
    m.track("promo/quiz/submit");
  };

  return (
    <div className="w-full bg-dark-100">
      <Section className="px-0 md:container">
        <h2 className="px-4 text-3xl font-medium md:px-0 lg:text-4xl">
          Получите индивидуальное предложение по изготовлению корпусной мебели
          для вашего дома
        </h2>
        <h3 className="mb-10 mt-2 px-4 text-xl text-dark-700 md:px-0 lg:text-2xl">
          Ответьте на 6 вопросов и{" "}
          <span className="font-bold">рассчитайте стоимость изготовления</span>{" "}
          мебели
        </h3>
        <form
          action={submitForm}
          onSubmit={handleSubmit}
          className="h-[calc(100vh-64px)] lg:h-[700px]"
        >
          <Quiz />
        </form>
      </Section>
    </div>
  );
};
