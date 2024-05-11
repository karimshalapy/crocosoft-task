import QuizForm from "@/components/QuizForm/QuizForm";
import { ROUTES } from "@/config/routes";
import { Quiz } from "@/types";
import { FC } from "react";
import { generatePath, useLoaderData, useNavigate } from "react-router-dom";

export const EditQuizPage: FC = () => {
  const quiz = useLoaderData() as Quiz;
  const navigate = useNavigate();

  return (
    <section className="page-container">
      <h1>Edit quiz #{quiz.id}</h1>
      <QuizForm
        onSubmit={async (values) => {
          await fetch(`http://localhost:3000/quizes/${quiz.id}`, {
            method: "PUT",
            body: JSON.stringify({
              ...quiz,
              ...values,
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
          navigate(generatePath(ROUTES.quizDetails, { quizId: quiz.id }));
        }}
        defaultValues={{
          ...quiz,
          questions: quiz.questions.map((question) => ({
            correctAnswerId: question.answer_id,
            feedbackFalse: question.feedback_false,
            feedbackTrue: question.feedback_true,
            id: question.id,
            text: question.text,
            answers: question.answers,
          })),
        }}
      />
    </section>
  );
};

export default EditQuizPage;
