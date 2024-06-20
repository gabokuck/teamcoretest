import { create } from 'zustand'
import { Answer } from '../../domain/entities/answer';

type Store = {
  answers: Answer[]
  add: (answer: Answer) => void
}

export const useAnswerStore = create<Store>()((set) => ({
  answers: [],
  add: (answer:Answer) => set((state) => {

    const ans = state.answers.filter((value) => value.questions_id !== answer.questions_id)

    

    const answers = ({ answers: [...ans, answer]});

     console.log(answers.answers)
     

    
    // console.log(answers);
    
    return answers;
  }),
}))

