import { yupResolver } from "@hookform/resolvers/yup";
import type { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { type QuizFormFields, quizFormSchema } from "./quizFormSchema";
import QuestionFields from "./QuestionFields";
import "./styles.css";

interface Props {
  onSubmit?: (values: QuizFormFields) => void;
}

export const QuizForm: FC<Props> = ({ onSubmit }) => {
  const methods = useForm({
    resolver: yupResolver(quizFormSchema),
    defaultValues: {
      description: "",
      questions: [],
      title: "",
      url: "",
      id: Math.random().toString(),
    },
  });
  const { register, handleSubmit } = methods;

  const submitHandler = handleSubmit((values) => {
    onSubmit?.(values);
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={submitHandler} className="quiz-form">
        <label>
          Title
          <input
            {...register("title")}
            type="text"
            placeholder="Enter title..."
          />
        </label>
        <label>
          Description
          <textarea
            {...register("description")}
            placeholder="Enter description..."
          />
        </label>
        <label>
          URL
          <input
            {...register("url")}
            type="text"
            placeholder="Enter Youtube URL..."
          />
        </label>
        <QuestionFields />
      </form>
    </FormProvider>
  );
};

export default QuizForm;
