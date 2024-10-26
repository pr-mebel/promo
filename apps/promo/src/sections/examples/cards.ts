import { Goal } from "@/hooks/use-metrika";
import fs from "fs/promises";

const getImagePaths = async (id: string) => {
  const cwd = process.cwd();
  const files = await fs.readdir(`${cwd}/public/projects/${id}/other`);

  return {
    main: `/projects/${id}/main.jpg`,
    images: files.map((file) => `/projects/${id}/other/${file}`),
  };
};

export const getCards = async (): Promise<
  {
    goal: Goal;
    title: string;
    main: string;
    images: string[];
  }[]
> => {
  const res = await Promise.all([
    getImagePaths("0"),
    getImagePaths("1"),
    getImagePaths("2"),
    getImagePaths("3"),
    getImagePaths("4"),
    getImagePaths("5"),
  ]);

  return [
    {
      title: "ЖК Садовые кварталы",
      goal: "promo/projects/1",
      ...res[0],
    },
    {
      title: "ЖК Серебряный бор",
      goal: "promo/projects/2",
      ...res[1],
    },
    {
      title: "ЖК Хорошевский",
      goal: "promo/projects/3",
      ...res[2],
    },
    {
      title: "Частный интерьер",
      goal: "promo/projects/4",
      ...res[3],
    },
    {
      title: "ЖК Пресня Сити",
      goal: "promo/projects/5",
      ...res[4],
    },
    {
      title: "ЖК Сердце Столицы",
      goal: "promo/projects/6",
      ...res[5],
    },
  ];
};
