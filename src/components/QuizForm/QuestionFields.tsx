import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { QuizFormFields } from "./quizFormSchema";
import AnswersFields from "./AnswersFields";

export const QuestionFields: FC = () => {
  const { control, register } = useFormContext<QuizFormFields>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });
  return (
    <fieldset>
      <legend>Questions:</legend>
      <button
        type="button"
        onClick={() =>
          append({
            correctAnswerId: "",
            feedbackFalse: "",
            feedbackTrue: "",
            text: "",
            id: Math.random().toString(),
          })
        }
      >
        + Add a question
      </button>
      {fields.map((field, index, array) => (
        <fieldset key={field.id}>
          <legend>Question:</legend>
          <label>
            Question Text
            <input {...register(`questions.${index}.text`)} type="text" />
          </label>
          <label>
            False feedback
            <input
              {...register(`questions.${index}.feedbackFalse`)}
              type="text"
            />
          </label>
          <label>
            True feedback
            <input
              {...register(`questions.${index}.feedbackTrue`)}
              type="text"
            />
          </label>
          <AnswersFields questionIndex={index} />
          {array.length > 1 && (
            <button type="button" onClick={() => remove(index)}>
              -
            </button>
          )}
        </fieldset>
      ))}
    </fieldset>
  );
};

export default QuestionFields;
