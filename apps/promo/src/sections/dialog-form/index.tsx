"use client";

import * as React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";

type DialogFormProps = {
  children: React.ReactNode;
};

export function DialogForm({ children }: DialogFormProps) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="grid w-[700px] max-w-none grid-cols-12 gap-2 border-none p-0">
          <div className="relative col-span-5 h-full">
            <Image
              src="/quiz/style/modern.jpg"
              alt="img"
              fill
              className="object-cover"
            />
          </div>
          <div className="col-span-7 p-10">
            <DialogHeader className="mb-6 space-y-3">
              <DialogTitle>Не&nbsp;нашли&nbsp;то, что искали?</DialogTitle>
              <DialogDescription>
                Свяжитесь с&nbsp;нами и&nbsp;мы&nbsp;поможем подобрать вам
                мебель и&nbsp;ответим на&nbsp;все вопросы. Никакого спама
              </DialogDescription>
            </DialogHeader>
            <Form />
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Не&nbsp;нашли&nbsp;то, что искали?</DrawerTitle>
          <DrawerDescription>
            Свяжитесь с&nbsp;нами и&nbsp;мы&nbsp;поможем подобрать вам мебель
            и&nbsp;ответим на&nbsp;все вопросы. Никакого спама
          </DrawerDescription>
        </DrawerHeader>
        <Form className="px-4 pb-6" />
      </DrawerContent>
    </Drawer>
  );
}

const Form = ({ className }: React.ComponentProps<"form">) => (
  <form className={cn(className)}>
    <Input name="name" type="name" placeholder="Ваше имя" className="mb-3" />
    <Input
      name="phone"
      type="tel"
      placeholder="Ваш номер телефона"
      className="mb-4"
    />
    <Button type="submit" variant="accent" className="w-full">
      Получить консультацию
    </Button>
  </form>
);
