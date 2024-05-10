import { ROUTES } from "@/config/routes";
import { Quiz as TQuiz } from "@/types";
import { ElementType, FC } from "react";
import { Link, generatePath } from "react-router-dom";
import DateCreatedModified from "../DateCreatedModified/DateCreatedModified";
import YoutubeImage from "../YoutubeImage/YoutubeImage";
import "./styles.css";

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
      <YoutubeImage
        url={quiz.url}
        alt={`Youtube video thumbnail for quiz ${quiz.title}`}
      />
    </Comp>
  );
};

export default Quiz;
