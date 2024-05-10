import { Question as TQuestion } from "@/types";
import { ElementType, FC } from "react";
import Question from "@/components/Question/Question";
import "./styles.css";

interface Props {
  questions: TQuestion[];
  as?: ElementType;
  questionWrapperAs?: ElementType;
}

export const QuestionsList: FC<Props> = ({
  questions = [],
  as: Comp = "ul",
  questionWrapperAs = "li",
}) => {
  return (
    <Comp className="questions-list">
      {questions.map((question) => (
        <Question
          question={question}
          key={question.id}
          as={questionWrapperAs}
        />
      ))}
    </Comp>
  );
};

export default QuestionsList;
