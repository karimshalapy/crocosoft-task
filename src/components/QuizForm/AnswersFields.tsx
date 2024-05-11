import { FC, Fragment } from "react";
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
    <fieldset>
      <legend>Answers:</legend>
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
      {fields.map((field, index, array) => (
        <Fragment key={field.id}>
          <label>
            Question Text
            <input
              {...register(`questions.${questionIndex}.answers.${index}.text`)}
              type="text"
            />
          </label>

          {array.length > 2 && (
            <button type="button" onClick={() => remove(index)}>
              -
            </button>
          )}
        </Fragment>
      ))}
    </fieldset>
  );
};

export default AnswersFields;
