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
    <fieldset className="quiz-form__questions">
      <div className="quiz-form__top-wrapper">
        <legend>Questions</legend>
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
            />
          </label>
          <label>
            False feedback
            <input
              {...register(`questions.${index}.feedbackFalse`)}
              type="text"
              placeholder="Enter false feedback text..."
            />
          </label>
          <label>
            True feedback
            <input
              {...register(`questions.${index}.feedbackTrue`)}
              type="text"
              placeholder="Enter true feedback text..."
            />
          </label>
          <AnswersFields questionIndex={index} />
          {array.length > 1 && (
            <button
              className="quiz-form__remove-question-button"
              type="button"
              onClick={() => remove(index)}
            >
              ×
            </button>
          )}
        </fieldset>
      ))}
    </fieldset>
  );
};

export default QuestionFields;
