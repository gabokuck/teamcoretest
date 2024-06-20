
import {useState } from 'react'
import { Answer } from '../../domain/entities/answer';

export const useSelectAnswer = () => {

    const [selecAnswer, setSelecAnswer] = useState<Answer>();
    const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([])

    const setSelectAnswer = (answer:Answer) => {
        setSelecAnswer(answer);
        setSelectedAnswers((data) => [...data, answer])
        console.log(selectedAnswers);
        
    }
    

    return {selecAnswer, setSelectAnswer}

}
