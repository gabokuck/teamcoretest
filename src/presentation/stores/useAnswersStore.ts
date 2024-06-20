import { create } from 'zustand'
import { Answer } from '../../domain/entities/answer';

type State = {
  answers: Answer[],
  statusOk: boolean
}

type Actions = {
  add: (answer: Answer) => void,
  reset: () => void
}

const initialState: State = {
  answers: [],
  statusOk: false
}

export const useAnswerStore = create<State & Actions>()((set, get) => ({
  ...initialState,
  add: (answer: Answer) => set((state) => {

    // Filtrado de las preguntas
    const ans = state.answers.filter((value) => value.questions_id !== answer.questions_id)
    const answers = ({ answers: [...ans, answer] });
    return answers;
  }),
  // resetear los parametros
  reset: () => {
    set(initialState)
  },
}))
