import QuizesList from "@/components/QuizesList/QuizesList";
import { ROUTES } from "@/config/routes";
import type { QuizesResponse } from "@/types";
import { FC } from "react";
import { Link, useLoaderData } from "react-router-dom";

export const HomePage: FC = () => {
  const quizes = useLoaderData() as QuizesResponse;
  return (
    <section className="page-container">
      <div className="homepage__top-wrapper">
        <h1>Quizes</h1>
        <Link to={ROUTES.createQuiz}>Add a Quiz</Link>
      </div>
      <QuizesList quizes={quizes} />
    </section>
  );
};

export default HomePage;
