import { StepData } from "./constants";
import { QuizStepImageOptions } from "./image-options-step";
import { QuizStepTextOptions } from "./text-options-step";

type StepProps = StepData & {
  value: string[];
  index: number;
  onChange: (value: string[]) => void;
};

export const QuizStep = ({ value, onChange, ...props }: StepProps) => (
  <div className="flex h-full flex-col">
    <p className="mb-6 text-2xl lg:text-3xl">{props.question}</p>
    <div className="flex-grow">
      {props.kind === "image-options" && (
        <QuizStepImageOptions
          options={props.options}
          store={props.store}
          value={value}
          cols={props.cols}
          onChange={onChange}
        />
      )}
      {props.kind === "text-options" && (
        <QuizStepTextOptions
          name={props.id}
          options={props.options}
          multiple={props.multiple}
          store={props.store}
          value={value}
          cols={props.cols}
          onChange={onChange}
        />
      )}
    </div>
  </div>
);
