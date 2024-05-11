import { ElementType, FC } from "react";
import "./styles.css";
import { Question as TQuestion } from "@/types";

interface Props {
  question: TQuestion;
  as?: ElementType;
}

export const Question: FC<Props> = ({ question, as: Comp = "article" }) => {
  return (
    <Comp>
      <dl>
        <dt>Question Text:</dt>
        <dd>{question.text}</dd>

        <dt>Answers:</dt>
        <dd>
          <ul>
            {question.answers.map((answer) => (
              <li key={answer.id}>
                {answer.id === question.answer_id ? "✅" : "❌"} {answer.text}
              </li>
            ))}
          </ul>
        </dd>

        <dt>Wrong answer feedback:</dt>
        <dd>{question.feedback_false}</dd>

        <dt>Right answer feedback:</dt>
        <dd>{question.feedback_true}</dd>
      </dl>
      <hr />
    </Comp>
  );
};

export default Question;
