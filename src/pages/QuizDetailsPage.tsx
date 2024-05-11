import DateCreatedModified from "@/components/DateCreatedModified/DateCreatedModified";
import QuestionsList from "@/components/QuestionsList/QuestionsList";
import YoutubeImage from "@/components/YoutubeImage/YoutubeImage";
import { ROUTES } from "@/config/routes";
import { Quiz } from "@/types";
import { FC } from "react";
import { Link, generatePath, useLoaderData } from "react-router-dom";

export const QuizDetailsPage: FC = () => {
  const quiz = useLoaderData() as Quiz;
  return (
    <section className="page-container quiz-details">
      <Link to={ROUTES.home}>&lt; Back to Homepage</Link>
      <div className="quiz-details__content-wrapper ">
        <h1>{quiz.title}</h1>
        <Link to={generatePath(ROUTES.editQuiz, { quizId: quiz.id })}>
          Edit
        </Link>
      </div>
      <div className="quiz-details__content-wrapper">
        <div>
          <DateCreatedModified
            created={quiz.created}
            modified={quiz.modified}
          />
          <p>{quiz.description}</p>
        </div>

        <YoutubeImage
          url={quiz.url}
          alt={`Youtube video thumbnail for quiz ${quiz.title}`}
        />
      </div>
      <QuestionsList questions={quiz.questions} />
    </section>
  );
};

export default QuizDetailsPage;
