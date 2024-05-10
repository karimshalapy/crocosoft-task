import { type LoaderFunction } from "react-router-dom";

export const quizDetailsLoader: LoaderFunction = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/quizes/${params.quizId}`);
  const data = await res.json();
  return data;
};
