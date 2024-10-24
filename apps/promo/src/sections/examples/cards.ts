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
      ...res[0],
    },
    {
      title: "ЖК Серебряный бор",
      ...res[1],
    },
    {
      title: "ЖК Хорошевский",
      ...res[2],
    },
    {
      title: "Частный интерьер",
      ...res[3],
    },
    {
      title: "ЖК Пресня Сити",
      ...res[4],
    },
    {
      title: "ЖК Сердце Столицы",
      ...res[5],
    },
  ];
};
