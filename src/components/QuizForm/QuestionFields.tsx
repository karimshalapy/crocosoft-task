import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { QuizFormFields } from "./quizFormSchema";
import AnswersFields from "./AnswersFields";

export const QuestionFields: FC = () => {
  const {
    control,
    register,
    formState: { isSubmitting, errors },
  } = useFormContext<QuizFormFields>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
    keyName: "key",
  });
  return (
    <fieldset className="quiz-form__questions">
      <div className="quiz-form__top-wrapper">
        <legend>Questions</legend>
        <button
          disabled={isSubmitting}
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
      </div>
      {fields.map((field, index, array) => (
        <fieldset key={field.id} className="quiz-form__question">
          <legend className="sr-only">Question:</legend>
          <label>
            Question Text
            <input
              {...register(`questions.${index}.text`)}
              type="text"
              placeholder="Enter question text..."
              disabled={isSubmitting}
            />
          </label>
          {errors.questions?.[index]?.text && (
            <p className="quiz-form__error">
              {errors.questions?.[index]?.text?.message}
            </p>
          )}
          <label>
            False feedback
            <input
              {...register(`questions.${index}.feedbackFalse`)}
              type="text"
              placeholder="Enter false feedback text..."
              disabled={isSubmitting}
            />
          </label>
          {errors.questions?.[index]?.feedbackFalse && (
            <p className="quiz-form__error">
              {errors.questions?.[index]?.feedbackFalse?.message}
            </p>
          )}
          <label>
            True feedback
            <input
              {...register(`questions.${index}.feedbackTrue`)}
              type="text"
              placeholder="Enter true feedback text..."
              disabled={isSubmitting}
            />
          </label>
          {errors.questions?.[index]?.feedbackTrue && (
            <p className="quiz-form__error">
              {errors.questions?.[index]?.feedbackTrue?.message}
            </p>
          )}
          <AnswersFields questionIndex={index} />
          {errors.questions?.[index]?.correctAnswerId && (
            <p className="quiz-form__error">
              {errors.questions?.[index]?.correctAnswerId?.message}
            </p>
          )}
          {array.length > 1 && (
            <button
              className="quiz-form__remove-question-button"
              type="button"
              onClick={() => remove(index)}
              disabled={isSubmitting}
            >
              ×
            </button>
          )}
        </fieldset>
      ))}
      {errors.questions && (
        <p className="quiz-form__error">{errors.questions?.message}</p>
      )}
    </fieldset>
  );
};

export default QuestionFields;
