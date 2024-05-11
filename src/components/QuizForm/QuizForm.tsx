import { yupResolver } from "@hookform/resolvers/yup";
import type { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { type QuizFormFields, quizFormSchema } from "./quizFormSchema";
import QuestionFields from "./QuestionFields";
import "./styles.css";

interface Props {
  onSubmit?: (values: QuizFormFields) => void | Promise<void>;
  defaultValues?: Partial<QuizFormFields>;
}

export const QuizForm: FC<Props> = ({ onSubmit, defaultValues }) => {
  const methods = useForm({
    resolver: yupResolver(quizFormSchema),
    defaultValues: {
      description: defaultValues?.description || "",
      questions: defaultValues?.questions || [],
      title: defaultValues?.title || "",
      url: defaultValues?.url || "",
      id: defaultValues?.id || Math.random().toString(),
    },
  });
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const submitHandler = handleSubmit(async (values) => {
    await onSubmit?.(values);
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
            disabled={isSubmitting}
          />
        </label>
        <label>
          Description
          <textarea
            {...register("description")}
            placeholder="Enter description..."
            disabled={isSubmitting}
          />
        </label>
        <label>
          URL
          <input
            {...register("url")}
            type="text"
            placeholder="Enter Youtube URL..."
            disabled={isSubmitting}
          />
        </label>
        <QuestionFields />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? "Loading..."
            : defaultValues
            ? "Edit Quiz"
            : "Create Quiz"}
        </button>
      </form>
    </FormProvider>
  );
};

export default QuizForm;
