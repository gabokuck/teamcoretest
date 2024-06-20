import { Answer } from "./answer";

export interface Question{
    question_id: string;
    question: string;
    answers: Answer[]
}