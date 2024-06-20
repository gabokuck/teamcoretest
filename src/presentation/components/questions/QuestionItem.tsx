import { View, Text } from 'react-native'
import React from 'react'
import { Question } from '../../../domain/entities/question'

interface Props {
  questions: Question
}

export const QuestionItem = ({questions}: Props) => {
  return (
    <View>
      <Text>{questions.question}</Text>
      {
        questions.answers.map((answer) => (<Text key={answer.answer_id}>{answer.answer}</Text>))
      }
    </View>
  )
}
