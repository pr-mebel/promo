/* eslint-disable @next/next/no-img-element */
"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ArrowRight } from "../../icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Goal, useMetrika } from "@/hooks/use-metrika";
import { useState, useRef } from "react";

type CardProps = {
  goal: Goal;
  title: string;
  main: StaticImageData;
  images: StaticImageData[];
};

export const Card = ({ images, main, title, goal }: CardProps) => {
  const m = useMetrika();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const selectImage = (index: number) => {
    setSelectedImageIndex(index);
    const selectedThumbnail = thumbnailRefs.current[index];
    if (selectedThumbnail) {
      selectedThumbnail.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <AlertDialog
      onOpenChange={(open) => {
        if (open) m.track(goal);
      }}
    >
      <AlertDialogHeader className="sr-only">
        <AlertDialogTitle>{title}</AlertDialogTitle>
      </AlertDialogHeader>
      <AlertDialogTrigger className="group md:relative md:col-span-4">
        <div className="flex cursor-pointer flex-col items-center">
          <Image
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
          <div className="absolute hidden h-full w-full flex-col items-center text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-hover:backdrop-brightness-50 md:flex">
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
        <div className="h-[100dvh] w-full overflow-y-auto px-6 py-4 md:hidden">
          <div className="relative flex flex-col gap-4 pb-12 pt-4">
            {images.map((src, i) => (
              <div key={i} className="relative w-full">
                <Image
                  src={src}
                  alt={title}
                  // fill
                  // priority={i < 3}
                  data-loaded="false"
                  onLoad={(event) => {
                    event.currentTarget.setAttribute("data-loaded", "true");
                  }}
                  className="h-full w-full object-cover data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/40"
                />
              </div>
            ))}
            <AlertDialogCancel asChild>
              <Button
                variant="outlined"
                size="icon"
                className="fixed right-8 top-12 h-12 w-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm hover:bg-black/40 focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-1"
              >
                <X className="h-6 w-6 text-white" />
              </Button>
            </AlertDialogCancel>
          </div>
        </div>
        {/* desktop */}
        <div className="relative inset-0 hidden h-screen w-full md:flex md:flex-col">
          {/* Main image display */}
          <div className="relative flex-1 p-6">
            <div className="relative h-full w-full">
              <Image
                src={images[selectedImageIndex]!}
                alt={title}
                fill
                priority
                className="object-contain"
                onLoad={(event) => {
                  event.currentTarget.setAttribute("data-loaded", "true");
                }}
              />

              {/* Navigation arrows */}
              <Button
                onClick={() => selectImage(Math.max(0, selectedImageIndex - 1))}
                disabled={selectedImageIndex === 0}
                variant="outlined"
                size="icon"
                className="absolute left-4 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm hover:bg-black/40 focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-1 disabled:opacity-50"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </Button>

              <Button
                onClick={() =>
                  selectImage(
                    Math.min(images.length - 1, selectedImageIndex + 1),
                  )
                }
                disabled={selectedImageIndex === images.length - 1}
                variant="outlined"
                size="icon"
                className="absolute right-4 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm hover:bg-black/40 focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-1 disabled:opacity-50"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </Button>
            </div>
          </div>

          {/* Thumbnails slider at bottom */}
          <div className="bg-background p-4">
            <ScrollArea className="w-full">
              <div className="flex gap-2 px-2 py-2">
                {images.map((src, index) => (
                  <button
                    key={index}
                    ref={(el) => {
                      thumbnailRefs.current[index] = el;
                    }}
                    onClick={() => selectImage(index)}
                    className={cn(
                      "relative aspect-video h-[103px] flex-shrink-0 transition-all focus:outline-none",
                      selectedImageIndex === index
                        ? "ring-1 ring-white ring-offset-1"
                        : "hover:ring-1 hover:ring-white focus:ring-1 focus:ring-white",
                    )}
                  >
                    <Image
                      src={src}
                      alt={`${title} ${index + 1}`}
                      fill
                      className="select-none object-cover"
                    />
                  </button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          <AlertDialogCancel asChild>
            <Button
              variant="outlined"
              size="icon"
              className="fixed right-6 top-6 z-10 h-12 w-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm hover:bg-black/40 focus:ring-1 focus:ring-white focus:ring-offset-1"
            >
              <X className="h-6 w-6 text-white" />
            </Button>
          </AlertDialogCancel>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
