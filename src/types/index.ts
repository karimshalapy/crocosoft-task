export interface Answer {
  id: string;
  text: string;
}

export interface Question {
  answers: Answer[];
  answer_id: string;
  feedback_false: string;
  feedback_true: string;
  id: string;
  text: string;
}

export interface Quiz {
  created: string;
  description: string;
  id: string;
  modified: string;
  questions: Question[];
  score: number | null;
  title: string;
  url: string;
}

export type QuizesResponse = Quiz[];
