import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { QuizFormFields } from "./quizFormSchema";

interface Props {
  questionIndex: number;
}

export const AnswersFields: FC<Props> = ({ questionIndex }) => {
  const { control, register } = useFormContext<QuizFormFields>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: `questions.${questionIndex}.answers`,
  });
  return (
    <fieldset className="quiz-form__answers">
      <div className="quiz-form__top-wrapper">
        <legend>Answers</legend>
        <button
          type="button"
          onClick={() =>
            append({
              text: "",
              id: Math.random().toString(),
            })
          }
        >
          + Add an answer
        </button>
      </div>
      {fields.map((field, index, array) => (
        <div className="quiz-form__answer" key={field.id}>
          <label className="quiz-form__correct-answer">
            <span className="sr-only">Correct Answer</span>
            <input
              type="radio"
              value={field.id}
              {...register(`questions.${questionIndex}.correctAnswerId`)}
            />
          </label>
          <label>
            <span className="sr-only">Answer Text</span>
            <input
              {...register(`questions.${questionIndex}.answers.${index}.text`)}
              type="text"
              placeholder={`Enter answer ${index + 1} text...`}
            />
          </label>

          {array.length > 2 && (
            <button type="button" onClick={() => remove(index)}>
              ×
            </button>
          )}
        </div>
      ))}
    </fieldset>
  );
};

export default AnswersFields;
