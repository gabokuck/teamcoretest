import  { questionsApi } from "../../config/api/questionsApi";
import type { Question } from "../../domain/entities/question";
import type { QuestionsAPIResponse } from "../../infraestructure/interfaces/questionsApi.interfaces";
import { QuestionMapper } from "../../infraestructure/mappers/question.mapper";

export const getQuestions = async():Promise<Question[]> => {
    try {
        const url = '/api/questions';
        const {data} = await questionsApi.get<QuestionsAPIResponse>(url);
        
        const questions = data.data.map((item) => QuestionMapper.questionsApiToEntity(item));
        
        return questions;
    } catch (error) {
        throw new Error('No se pudo obtener las preguntas')
    }
}