import { ElementType, FC } from "react";
import { Quiz as TQuiz } from "@/types";
import Quiz from "@/components/Quiz/Quiz";
import "./styles.css";

interface Props {
  quizes: TQuiz[];
  as?: ElementType;
  quizWrapperAs?: ElementType;
}

export const QuizesList: FC<Props> = ({
  quizes = [],
  as: Comp = "ul",
  quizWrapperAs = "li",
}) => {
  return (
    <Comp className="quizes-list">
      {quizes.map((quiz) => (
        <Quiz quiz={quiz} key={quiz.id} as={quizWrapperAs} />
      ))}
    </Comp>
  );
};

export default QuizesList;
