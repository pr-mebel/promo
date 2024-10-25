/* eslint-disable @next/next/no-img-element */
"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ArrowRight } from "../../icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ArrowLeft, X } from "lucide-react";

type CardProps = {
  title: string;
  main: string;
  images: string[];
};

export const Card = ({ images, main, title }: CardProps) => (
  <AlertDialog
    onOpenChange={(open) => {
      if (open) {
        // send event to analytics
      }
    }}
  >
    <AlertDialogTrigger className="md:relative md:col-span-4">
      <div className="flex cursor-pointer flex-col items-center">
        <img
          src={main}
          alt={title}
          className="aspect-[398/360] w-full object-cover md:aspect-[3/2]"
        />
        {/* mobile only */}
        <div className="mt-2 flex w-full items-start justify-between md:hidden">
          <div className="flex gap-3">
            <h4 className="text-xl font-medium uppercase">{title}</h4>
            <p className="text-xl text-dark-700">{images.length} фото</p>
          </div>
          <ArrowRight className="h-7 w-7" />
        </div>
        {/* desktop only */}
        <div className="absolute hidden h-full w-full flex-col items-center text-white opacity-0 transition-opacity duration-200 hover:opacity-100 hover:backdrop-blur-md hover:backdrop-brightness-50 md:flex">
          <h4 className="mb-3 mt-[15%] text-lg font-medium uppercase">
            {title}
          </h4>
          <p className="mb-4 text-lg">{images.length} фото</p>
          <div
            className={cn(
              buttonVariants({ variant: "accent", size: "small" }),
              "mx-auto",
            )}
          >
            Смотреть все фото
          </div>
        </div>
      </div>
    </AlertDialogTrigger>
    <AlertDialogContent>
      {/* mobile */}
      <div className="inset-0 h-screen w-full overflow-scroll px-6 py-4 md:hidden">
        <div className="relative flex flex-col gap-4 pb-12">
          {images.map((src, i) => (
            <div key={i} className="relative aspect-square">
              <Image
                key={src}
                src={src}
                alt={title}
                fill
                priority={i < 3}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ))}
          <AlertDialogCancel className="fixed bottom-0 left-0 w-full">
            <ArrowLeft className="mr-2 h-6 w-6" />
            Назад
          </AlertDialogCancel>
        </div>
      </div>
      {/* desktop */}
      <div className="relative inset-0 hidden h-screen w-full overflow-scroll px-6 py-4 md:block">
        <div className="grid grid-cols-12 gap-4">
          {images.map((src, i) => (
            <div key={i} className="relative col-span-4 aspect-square">
              <Image
                key={src}
                src={src}
                alt={title}
                fill
                priority={i < 3}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <AlertDialogCancel className="fixed right-12 top-6">
          <X />
        </AlertDialogCancel>
      </div>
    </AlertDialogContent>
  </AlertDialog>
);
