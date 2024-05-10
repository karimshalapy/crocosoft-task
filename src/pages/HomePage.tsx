import QuizesList from "@/components/QuizesList/QuizesList";
import type { QuizesResponse } from "@/types";
import { FC } from "react";
import { useLoaderData } from "react-router-dom";

export const HomePage: FC = () => {
  const quizes = useLoaderData() as QuizesResponse;
  return (
    <section className="page-container">
      <h1>Quizes</h1>
      <QuizesList quizes={quizes} />
    </section>
  );
};

export default HomePage;
