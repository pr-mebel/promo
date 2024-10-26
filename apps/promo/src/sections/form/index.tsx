import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { submitForm } from "@/server";

export const Form = ({ className }: React.ComponentProps<"form">) => (
  <form className={cn("space-y-3", className)} action={submitForm}>
    <Input name="name" type="name" placeholder="Ваше имя" />
    <Input name="phone" type="tel" required placeholder="Ваш номер телефона" />
    <Button type="submit" variant="accent" className="w-full">
      Получить консультацию
    </Button>
  </form>
);
