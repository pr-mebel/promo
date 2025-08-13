"use client";
import { useCallback, useEffect, useState } from "react";

export type Goal =
  | "promo/designer-form/submit"
  | "promo/modal-form/submit"
  | "promo/phone/click"
  | "promo/quiz/step/1"
  | "promo/quiz/step/2"
  | "promo/quiz/step/3"
  | "promo/quiz/step/4"
  | "promo/quiz/step/5"
  | "promo/quiz/step/6"
  | "promo/quiz/submit"
  | "promo/projects/1"
  | "promo/projects/2"
  | "promo/projects/3"
  | "promo/projects/4"
  | "promo/projects/5"
  | "promo/projects/6";

export const useMetrika = () => {
  const [ready, setReady] = useState(false);

  const handleTrackEvent = useCallback(
    (event: Goal) => {
      if (!ready) return;

      window.yaCounter54949111?.reachGoal(event);
    },
    [ready],
  );

  useEffect(() => {
    setReady(true);
  }, []);

  return {
    track: handleTrackEvent,
  };
};
