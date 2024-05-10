import { type LoaderFunction } from "react-router-dom";

export const quizesLoader: LoaderFunction = async () => {
  const res = await fetch("http://localhost:3000/quizes");
  const data = await res.json();
  return data;
};
