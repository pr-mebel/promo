"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMetrika } from "@/hooks/use-metrika";
import { cn } from "@/lib/utils";
import { submitForm } from "@/server";

export const Form = ({ className }: React.ComponentProps<"form">) => {
  const m = useMetrika();

  return (
    <form
      className={cn("space-y-3", className)}
      action={submitForm}
      onSubmit={() => {
        m.track("promo/modal-form/submit");
      }}
    >
      <Input name="name" type="name" placeholder="Ваше имя" />
      <Input
        name="phone"
        type="tel"
        required
        placeholder="Ваш номер телефона"
      />
      <Button type="submit" variant="accent" className="w-full">
        Получить консультацию
      </Button>
    </form>
  );
};
