import { StepData } from "./constants";
import { QuizStepImageOptions } from "./image-options-step";
import { QuizStepTextOptions } from "./text-options-step";

export const QuizStep = ({ ...props }: StepData) => (
  <div className="flex h-full flex-col">
    <p className="mb-6 text-2xl lg:text-3xl">{props.question}</p>
    <div className="flex-grow">
      {props.kind === "image-options" && (
        <QuizStepImageOptions
          name={props.id}
          options={props.options}
          store={props.store}
          cols={props.cols}
        />
      )}
      {props.kind === "text-options" && (
        <QuizStepTextOptions
          name={props.id}
          options={props.options}
          multiple={props.multiple}
          store={props.store}
          cols={props.cols}
        />
      )}
    </div>
  </div>
);
