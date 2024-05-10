import { ElementType, FC } from "react";
import "./styles.css";
import { Question as TQuestion } from "@/types";

interface Props {
  question: TQuestion;
  as?: ElementType;
}

export const Question: FC<Props> = ({ question, as: Comp = "pre" }) => {
  return (
    <Comp>
      {question.text}
      <ul>
        {question.answers.map((answer) => (
          <li key={answer.id}>
            {answer.id === question.answer_id ? "✅" : "❌"} {answer.text}
          </li>
        ))}
      </ul>
    </Comp>
  );
};

export default Question;
