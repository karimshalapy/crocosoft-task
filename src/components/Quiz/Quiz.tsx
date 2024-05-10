import { ElementType, FC } from "react";
import { Quiz as TQuiz } from "@/types";
import "./styles.css";
import { getYoutubeImageUrl } from "@/utils/getYoutubeImageUrl";
import { Link, generatePath } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import DateCreatedModified from "../DateCreatedModified/DateCreatedModified";

interface Props {
  quiz: TQuiz;
  as?: ElementType;
}

export const Quiz: FC<Props> = ({ quiz, as: Comp = "li" }) => {
  return (
    <Comp className="quiz">
      <Link
        to={generatePath(ROUTES.quizDetails, { quizId: quiz.id.toString() })}
      >
        <h2>{quiz.title}</h2>
        <DateCreatedModified created={quiz.created} modified={quiz.modified} />
        <p>{quiz.description}</p>
        <p>
          Questions count:{" "}
          <span className="quiz__questions-count">{quiz.questions.length}</span>
        </p>
      </Link>
      <a
        className="quiz__thumbnail"
        href={quiz.url}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={getYoutubeImageUrl(quiz.url)}
          alt={`Youtube video thumbnail for quiz ${quiz.title}`}
        />
      </a>
    </Comp>
  );
};

export default Quiz;
