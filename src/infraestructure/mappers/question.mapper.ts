import { Question } from "../../domain/entities/question";
import { DataQuestion } from "../interfaces/questionsApi.interfaces";


export class QuestionMapper {

    static questionsApiToEntity(data: DataQuestion): Question {
        return {
            question_id: data.question_id,
            question: data.question,
            answers: data.answers.map((a) => { return {
                questions_id: data.question_id,
                answer: a.answer,
                answer_id: a.answer_id
            }})
        }
}
}