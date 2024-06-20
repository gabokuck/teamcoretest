import  { questionsApi } from "../../config/api/questionsApi";
import { Answer } from '../../domain/entities/answer';
import { AnswerMapper } from "../../infraestructure/mappers/answers.mapper";
import moment from 'moment';

export const sendAnswers = async(questions: Answer[]):Promise<boolean> => {
    try {
        const url = '/api/answer';
        let formattedDate = (moment(Date.now())).format('MM/DD/YYYY HH:mm:ss')
        const body = AnswerMapper.questionsApiToEntity(questions, formattedDate);
        const resp = await questionsApi.post(url, body);

        console.log(formattedDate);
        

        if(resp.status === 200){
            return true;
        }
            
        return false;
    } catch (error) {

        throw new Error('No se pudieron enviar las respuestas');
    }
}