import { Answer } from '../../domain/entities/answer';
import { AnswersApiResponse } from "../interfaces/answersApiResponse.interface";


export class AnswerMapper {

    static questionsApiToEntity(data: Answer[], date: string): AnswersApiResponse {
        return {
            date: date,
            data:  data.map((e) => {
                return {
                    answer_id: e.answer_id,
                    question_id: e.questions_id
                }
            })
        }
}
}