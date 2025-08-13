"use server";

import { redirect } from "next/navigation";
import {
  furnitureOptions,
  materialsOptions,
  styleOptions,
  timingOptions,
  designProjectOptions,
  stageOptions,
} from "@/sections/quiz/constants";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

type Store = Record<string, { title: string | React.ReactNode }>;

const getOptionLabel = (
  store: Store,
  option: FormDataEntryValue | null,
): string => {
  if (!option) {
    return "";
  }

  const optionData = store[option.toString()];

  if (!optionData) {
    return option.toString();
  }

  const label = optionData.title;

  if (typeof label === "string") {
    return label;
  }

  if (!label) {
    return option.toString();
  }

  // @ts-ignore
  return label?.props?.children as string;
};

const sendEmail = (transport: nodemailer.Transporter, params: Mail.Options) => {
  return new Promise((resolve, reject) => {
    transport.sendMail(params, (error, info) => {
      if (error) {
        return reject(error);
      }

      return resolve(info);
    });
  });
};

const getQuizData = (formData: FormData) => {
  const quizData: Record<string, string | string[]> = {};
  quizData.furniture = formData
    .getAll("furniture")
    .reduce(
      (acc, v) => [...acc, getOptionLabel(furnitureOptions, v)],
      [] as string[],
    );
  quizData.style = formData
    .getAll("style")
    .reduce(
      (acc, v) => [...acc, getOptionLabel(styleOptions, v)],
      [] as string[],
    );
  quizData.designProject = getOptionLabel(
    designProjectOptions,
    formData.get("designProject"),
  );
  quizData.materials = formData
    .getAll("materials")
    .reduce(
      (acc, v) => [...acc, getOptionLabel(materialsOptions, v)],
      [] as string[],
    );
  quizData.stage = getOptionLabel(stageOptions, formData.get("stage"));
  quizData.timing = getOptionLabel(timingOptions, formData.get("timing"));
  return quizData;
};

const getEmailParams = (
  pii: { name: string; phone: string },
  quizData: Record<string, string | string[]>,
) => {
  let html = `
    <p><strong>Имя:</strong><br>${pii.name}</p>
    <p><strong>Телефон:</strong><br>${pii.phone}</p>
  `;

  if (Object.keys(quizData).length) {
    html += `
      <hr>
      <p>Данные квиза<br>
          ${Object.entries(quizData).reduce((acc, [key, val]) => {
            return `${acc}<p><strong>${key}:</strong> ${val}</p>`;
          }, "")}
      </p>
    `;
  }

  return {
    from: {
      name: "Promo",
      address: process.env.EMAIL_MAIL_RU!,
    },
    to: process.env.EMAIL_MAIL_RU!,
    replyTo: process.env.EMAIL_MAIL_RU!,
    subject: `Промо | Заявка от ${pii.name} ${pii.phone}`,
    html,
  };
};

export const submitForm = async (formData: FormData) => {
  const pii = {
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
  };

  let quizData: Record<string, string | string[]> = {};
  const isQuiz = !!formData.get("isQuiz");
  if (isQuiz) quizData = getQuizData(formData);

  const transporterMail = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_MAIL_RU,
      pass: process.env.PASSWORD_MAIL_RU,
    },
  });

  await sendEmail(transporterMail, getEmailParams(pii, quizData));

  return redirect("/thanks");
};
