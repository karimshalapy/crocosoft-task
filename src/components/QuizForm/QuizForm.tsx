import { yupResolver } from "@hookform/resolvers/yup";
import type { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { type QuizFormFields, quizFormSchema } from "./quizFormSchema";
import QuestionFields from "./QuestionFields";

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
      <form onSubmit={submitHandler}>
        <label>
          Title
          <input {...register("title")} type="text" />
        </label>
        <label>
          Description
          <input {...register("description")} type="text" />
        </label>
        <label>
          URL
          <input {...register("url")} type="text" />
        </label>
        <QuestionFields />
      </form>
    </FormProvider>
  );
};

export default QuizForm;
