import MainLayout from "@/layouts/main";
import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <div>Hello world!</div>,
      },
      {
        path: ROUTES.createQuiz,
        element: <div>{ROUTES.createQuiz}</div>,
      },
      {
        path: ROUTES.editQuiz,
        element: <div>{ROUTES.editQuiz}</div>,
      },
      {
        path: ROUTES.quizDetails,
        element: <div>{ROUTES.quizDetails}</div>,
      },
    ],
  },
]);

export default router;
