import QuizForm from "@/components/QuizForm/QuizForm";
import { ROUTES } from "@/config/routes";
import { FC } from "react";
import { generatePath, useNavigate } from "react-router-dom";

export const CreateQuizPage: FC = () => {
  const navigate = useNavigate();

  return (
    <section className="page-container">
      <h1>Create a Quiz</h1>
      <QuizForm
        onSubmit={async (values) => {
          await fetch(`http://localhost:3000/quizes`, {
            method: "POST",
            body: JSON.stringify({
              ...values,
              created: new Date().toISOString(),
              modified: new Date().toISOString(),
              questions: values.questions?.map(
                (question) =>
                  ({
                    answer_id: question.correctAnswerId,
                    feedback_false: question.feedbackFalse,
                    feedback_true: question.feedbackTrue,
                    id: question.id,
                    text: question.text,
                    answers: question.answers,
                  } || [])
              ),
            }),
          });
          navigate(generatePath(ROUTES.quizDetails, { quizId: values.id }));
        }}
      />
    </section>
  );
};

export default CreateQuizPage;
