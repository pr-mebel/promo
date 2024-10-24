"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ArrowRight } from "../../icons";

type CardProps = {
  title: string;
  count: number;
  image: string;
};

export const Card = ({ count, image, title }: CardProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="flex cursor-pointer flex-col items-center">
          <img
            src={image}
            alt={title}
            className="aspect-[398/360] w-full object-cover"
          />
          <div className="mt-2 flex w-full items-start justify-between">
            <div className="flex gap-3">
              <h4 className="text-xl font-medium uppercase">{title}</h4>
              <p className="text-xl text-dark-700">{count} фото</p>
            </div>
            <ArrowRight className="h-7 w-7" />
          </div>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="">
        <div className="pointer-events-auto left-0 top-0 h-screen w-full overflow-scroll px-6 py-4">
          <div className="relative flex flex-col gap-2 pb-12">
            {Array.from({ length: count })
              .map(() => image)
              .map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={title}
                  className="w-full object-cover"
                />
              ))}
            <AlertDialogCancel className="fixed bottom-0 left-0 w-full">
              Назад
            </AlertDialogCancel>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
