import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { QuizFormFields } from "./quizFormSchema";

interface Props {
  questionIndex: number;
}

export const AnswersFields: FC<Props> = ({ questionIndex }) => {
  const {
    control,
    register,
    formState: { isSubmitting, errors },
  } = useFormContext<QuizFormFields>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: `questions.${questionIndex}.answers`,
    keyName: "key",
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
          disabled={isSubmitting}
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
              disabled={isSubmitting}
              {...register(`questions.${questionIndex}.correctAnswerId`)}
            />
          </label>
          <div>
            <label>
              <span className="sr-only">Answer Text</span>
              <input
                disabled={isSubmitting}
                {...register(
                  `questions.${questionIndex}.answers.${index}.text`
                )}
                type="text"
                placeholder={`Enter answer ${index + 1} text...`}
              />
            </label>
            {errors.questions?.[questionIndex]?.answers?.[index]?.text && (
              <p className="quiz-form__error">
                {
                  errors.questions?.[questionIndex]?.answers?.[index]?.text
                    ?.message
                }
              </p>
            )}
          </div>

          {array.length > 2 && (
            <button
              type="button"
              onClick={() => remove(index)}
              disabled={isSubmitting}
            >
              ×
            </button>
          )}
        </div>
      ))}
      {errors.questions?.[questionIndex]?.answers && (
        <p className="quiz-form__error">
          {errors.questions?.[questionIndex]?.answers?.message}
        </p>
      )}
    </fieldset>
  );
};

export default AnswersFields;
