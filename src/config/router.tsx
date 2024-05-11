import MainLayout from "@/layouts/main";
import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import { quizesLoader } from "@/loaders/quizesLoader";
import { quizDetailsLoader } from "@/loaders/quizDetailsLoader";

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <MainLayout />,
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import("@/pages/HomePage")).default,
        }),
        loader: quizesLoader,
      },
      {
        path: ROUTES.createQuiz,
        lazy: async () => ({
          Component: (await import("@/pages/CreateQuizPage")).default,
        }),
      },
      {
        path: ROUTES.editQuiz,
        lazy: async () => ({
          Component: (await import("@/pages/EditQuizPage")).default,
        }),
        loader: quizDetailsLoader,
      },
      {
        path: ROUTES.quizDetails,
        lazy: async () => ({
          Component: (await import("@/pages/QuizDetailsPage")).default,
        }),
        loader: quizDetailsLoader,
      },
    ],
  },
]);

export default router;
