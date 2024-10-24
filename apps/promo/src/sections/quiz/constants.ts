export type ImageOptionProps = {
  title: string;
  image: string;
};

export type TextOptionProps = {
  title: string;
};

const furnitureOptions: Record<string, ImageOptionProps> = {
  kitchen: {
    title: "Кухня",
    image: "https://via.placeholder.com/330",
  },
  "main-room": {
    title: "Гостиная",
    image: "https://via.placeholder.com/330",
  },
  bedroom: {
    title: "Шкафы",
    image: "https://via.placeholder.com/330",
  },
  wardrobe: {
    title: "Гардеробная",
    image: "https://via.placeholder.com/330",
  },
  bathroom: {
    title: "Ванная",
    image: "https://via.placeholder.com/330",
  },
  custom: {
    title: "Нужно укомплектовать под ключ",
    image: "https://via.placeholder.com/330",
  },
};

const styleOptions: Record<string, ImageOptionProps> = {
  modern: {
    title: "Современный",
    image: "https://via.placeholder.com/330",
  },
  classic: {
    title: "Классический",
    image: "https://via.placeholder.com/330",
  },
  neoclassic: {
    title: "Неоклассика",
    image: "https://via.placeholder.com/330",
  },
  loft: {
    title: "Лофт",
    image: "https://via.placeholder.com/330",
  },
  other: {
    title: "Другой",
    image: "https://via.placeholder.com/330",
  },
  "consultation-needed": {
    title: "Нужна консультация",
    image: "https://via.placeholder.com/330",
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
    title: "Проект в стадии разработки",
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
    title: "Еще не начали",
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
  question: string;
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
    question: "Есть ли у вас дизайн-проект интерьера или мебели?",
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
    question: "Какие материалы в мебели для Вас предпочтительны?",
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
    question: "На какой стадии ремонта находится помещение?",
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
    question: "Как скоро Вы хотели бы, чтобы ваш дом был обставлен мебелью?",
    kind: "text-options",
    options: ["asap", "3-months", "6-months", "idk"],
    store: timingOptions,
    cols: {
      desktop: 2,
      mobile: 1,
    },
  },
];
