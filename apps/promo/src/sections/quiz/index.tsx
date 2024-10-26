"use client";

import { steps } from "./constants";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { QuizStep } from "./step";
import { DesignerMessage } from "./designer-message";
import { FinalStep } from "./final-step";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/card";
import { submitForm } from "@/server";
import { useState } from "react";
import { Goal, useMetrika } from "@/hooks/use-metrika";

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

export const WhiteCard = ({
  children,
  className,
}: React.ComponentProps<"div">) => (
  <div
    className={cn(
      "absolute inset-0 z-0 grid grid-cols-12 bg-white opacity-0",
      className,
    )}
  >
    {children}
  </div>
);

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
    if (step === steps.length) {
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
      <FinalStep className={cn(step === 6 && "z-10 opacity-100")} />
      <WhiteCard className={cn(step !== 6 && "z-10 opacity-100")}>
        <DesignerMessage className="hidden xl:block" />
        <main className="relative col-span-12 xl:col-span-9">
          <Progress
            value={((step + 1) / 7) * 100}
            className="hidden lg:block"
          />
          <Card className="h-full">
            <div className="relative flex h-full flex-col justify-end">
              {steps.map((stepData, i) => (
                <StepContainer key={stepData.id} active={step === i}>
                  <QuizStep {...stepData} />
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
            </div>
          </Card>
        </main>
      </WhiteCard>
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
      <Section>
        <h2 className="text-3xl font-medium lg:text-4xl">
          Получите индивидуальное предложение по изготовлению корпусной мебели
          для вашего дома
        </h2>
        <h3 className="mb-10 mt-2 text-xl text-dark-700 lg:text-2xl">
          Ответьте на 6 вопросов и{" "}
          <span className="font-bold">рассчитайте стоимость изготовления</span>{" "}
          мебели
        </h3>
        <form
          action={submitForm}
          onSubmit={handleSubmit}
          className="relative h-[700px] md:h-[1000px] lg:h-[700px]"
        >
          <Quiz />
        </form>
      </Section>
    </div>
  );
};
