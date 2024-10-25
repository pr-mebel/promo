export type ImageOptionProps = {
  title: string;
  image: string;
};

export type TextOptionProps = {
  title: React.ReactNode;
};

const furnitureOptions: Record<string, ImageOptionProps> = {
  kitchen: {
    title: "Кухня",
    image: "/quiz/furniture/1.jpg",
  },
  "main-room": {
    title: "Гостиная",
    image: "/quiz/furniture/2.jpg",
  },
  bedroom: {
    title: "Шкафы",
    image: "/quiz/furniture/3.jpg",
  },
  wardrobe: {
    title: "Гардеробная",
    image: "/quiz/furniture/4.jpg",
  },
  bathroom: {
    title: "Ванная",
    image: "/quiz/furniture/5.jpg",
  },
  custom: {
    title: "Нужно укомплектовать под ключ",
    image: "/quiz/furniture/6.jpg",
  },
};

const styleOptions: Record<string, ImageOptionProps> = {
  modern: {
    title: "Современный",
    image: "/quiz/style/modern.jpg",
  },
  classic: {
    title: "Классический",
    image: "/quiz/style/classic.jpg",
  },
  neoclassic: {
    title: "Неоклассика",
    image: "/quiz/style/neoclassic.jpg",
  },
  loft: {
    title: "Лофт",
    image: "/quiz/style/loft.jpg",
  },
  other: {
    title: "Другой",
    image: "/quiz/style/other.webp",
  },
  "consultation-needed": {
    title: "Нужна консультация",
    image: "/quiz/style/other.webp",
  },
};

const designProjectOptions: Record<string, TextOptionProps> = {
  "has-design-project": {
    title: "Есть дизайн проект интерьера",
  },
  "has-photos": {
    title: "Есть фото/визуализации понравившейся мебели",
  },
  "in-progress": {
    title: <>Проект в&nbsp;стадии разработки</>,
  },
  "no-design-project": {
    title: "Ничего нет, нужен дизайн-проект",
  },
};

const materialsOptions: Record<string, TextOptionProps> = {
  ldsp: {
    title: "ЛДСП",
  },
  shpon: {
    title: "Шпон",
  },
  enamel: {
    title: "Эмаль",
  },
  latun: {
    title: "Латунь",
  },
  metal: {
    title: "Металл",
  },
  glass: {
    title: "Стекло",
  },
  idk: {
    title: "Затрудняюсь ответить",
  },
};

const stageOptions: Record<string, TextOptionProps> = {
  "not-started": {
    title: <>Еще не&nbsp;начали</>,
  },
  "rough-finish": {
    title: "Черновая отделка",
  },
  "fine-finish": {
    title: "Чистовая отделка",
  },
  "repairs-done": {
    title: "Ремонт окончен",
  },
  idk: {
    title: "Затрудняюсь ответить",
  },
};

const timingOptions: Record<string, TextOptionProps> = {
  asap: {
    title: "Как можно быстрее",
  },
  "3-months": {
    title: "В течение 3 месяцев",
  },
  "6-months": {
    title: "В течение полугода",
  },
  idk: {
    title: "Пока только присматриваюсь",
  },
};

export type StepData = {
  id: string;
  cols: {
    desktop: number;
    mobile: number;
  };
  question: React.ReactNode;
  options: string[];
} & (
  | {
      kind: "image-options";

      store: Record<string, ImageOptionProps>;
    }
  | {
      kind: "text-options";
      multiple?: boolean;
      store: Record<string, TextOptionProps>;
    }
);

export const steps: StepData[] = [
  {
    id: "furniture",
    question: "Какая мебель Вам нужна?",
    kind: "image-options",
    options: [
      "kitchen",
      "main-room",
      "bedroom",
      "wardrobe",
      "bathroom",
      "custom",
    ],
    store: furnitureOptions,
    cols: {
      desktop: 3,
      mobile: 2,
    },
  },
  {
    id: "style",
    question: "Какой стиль интерьера вам нравится больше всего?",
    kind: "image-options",
    options: [
      "modern",
      "classic",
      "neoclassic",
      "loft",
      "other",
      "consultation-needed",
    ],
    store: styleOptions,
    cols: {
      desktop: 3,
      mobile: 2,
    },
  },
  {
    id: "designProject",
    question: <>Есть&nbsp;ли у&nbsp;вас дизайн-проект интерьера или мебели?</>,
    kind: "text-options",
    options: [
      "has-design-project",
      "has-photos",
      "in-progress",
      "no-design-project",
    ],
    store: designProjectOptions,
    cols: {
      desktop: 2,
      mobile: 1,
    },
  },
  {
    id: "materials",
    question: <>Какие материалы в&nbsp;мебели для Вас предпочтительны?</>,
    multiple: true,
    kind: "text-options",
    options: ["ldsp", "shpon", "enamel", "latun", "metal", "glass", "idk"],
    store: materialsOptions,
    cols: {
      desktop: 3,
      mobile: 2,
    },
  },
  {
    id: "stage",
    question: <>На&nbsp;какой стадии ремонта находится помещение?</>,
    kind: "text-options",
    options: [
      "not-started",
      "rough-finish",
      "fine-finish",
      "repairs-done",
      "idk",
    ],
    store: stageOptions,
    cols: {
      desktop: 2,
      mobile: 1,
    },
  },
  {
    id: "timing",
    question: (
      <>
        Как скоро&nbsp;Вы хотели&nbsp;бы, чтобы ваш дом был обставлен мебелью?
      </>
    ),
    kind: "text-options",
    options: ["asap", "3-months", "6-months", "idk"],
    store: timingOptions,
    cols: {
      desktop: 2,
      mobile: 1,
    },
  },
];
