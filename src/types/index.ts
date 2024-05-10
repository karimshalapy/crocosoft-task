export interface Answer {
  id: number;
  text: string;
}

export interface Question {
  answers: Answer[];
  answer_id: number;
  feedback_false: string;
  feedback_true: string;
  id: number;
  text: string;
}

export interface Quiz {
  created: string;
  description: string;
  id: number;
  modified: string;
  questions: Question[];
  score: number | null;
  title: string;
  url: string;
}

export type QuizesResponse = Quiz[];
