import { ElementType, FC } from "react";
import { Quiz as TQuiz } from "@/types";
import "./styles.css";
import { getYoutubeImageUrl } from "@/utils/getYoutubeImageUrl";
import { Link, generatePath } from "react-router-dom";
import { ROUTES } from "@/config/routes";

interface Props {
  quiz: TQuiz;
  as?: ElementType;
}

export const Quiz: FC<Props> = ({ quiz, as: Comp = "li" }) => {
  const isEdited =
    new Date(quiz.modified).valueOf() !== new Date(quiz.created).valueOf();
  return (
    <Comp className="quiz">
      <Link
        to={generatePath(ROUTES.quizDetails, { quizId: quiz.id.toString() })}
      >
        <h2>{quiz.title}</h2>
        <p>
          <time className="quiz__timestamp" dateTime={quiz.created}>
            {new Date(quiz.created).toLocaleDateString("en-UK")}
          </time>
          {isEdited && (
            <>
              &nbsp;
              <time
                className="quiz__timestamp quiz__timestamp--modified"
                dateTime={quiz.modified}
                title={new Date(quiz.modified).toLocaleDateString("en-UK")}
              >
                (edited)
              </time>
            </>
          )}
        </p>
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
