import { object, InferType, string, array } from "yup";

export const answerSchema = object({
  text: string().trim().required("Answer text field is required"),
  id: string().required(),
});

export const questionSchema = object({
  feedbackFalse: string().trim().required("False feedback field is required"),
  feedbackTrue: string().trim().required("True feedback field is required"),
  text: string().trim().required("Text field is required"),
  correctAnswerId: string()
    .trim()
    .required("At least one correct answer must be selected"),
  answers: array().of(answerSchema).min(2, "Must provide at least two answers"),
  id: string().required(),
});

export const quizFormSchema = object({
  title: string().trim().required("Title field is required"),
  description: string().trim().required("Description field is required"),
  url: string()
    .trim()
    .required("URL field is required")
    .url("Please provide a proper URL")
    .test("validYoutubeUrl", "Please provide a proper YouTube URL", (value) => {
      try {
        return Boolean(new URL(value).searchParams.get("v"));
      } catch {
        return false;
      }
    }),
  questions: array()
    .of(questionSchema)
    .min(1, "Must provide at least one question"),
  id: string().required(),
});

export type QuizFormFields = InferType<typeof quizFormSchema>;
