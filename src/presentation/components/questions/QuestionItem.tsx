import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {Question} from '../../../domain/entities/question';
import { colors } from '../../../config/theme/theme';
import {Separator} from '../ui/Separator';
import {useSelectAnswer} from '../../hooks/useSelectAnswer';
import { useAnswerStore } from '../../stores/useAnswersStore';

interface Props {
  questions: Question;
  index: number;
  isLast: boolean;
}

export const QuestionItem = ({questions, index, isLast = false}: Props) => {
  const {answers, add} = useAnswerStore()

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerQuestion}>
          <Text style={styles.containerNumber}>{index}</Text>
          <Text style={styles.textQuestion}>{questions.question}</Text>
        </View>
        <View style={styles.answersContainer}>
          {questions.answers.map((answer, index) => (
            <Pressable
              key={answer.answer_id}
              onPress={() => add(answer)}>
              <View
                style={{
                  ...styles.containerAnswer,
                  ...(answers.includes(answer)
                    ? {backgroundColor: colors.primary, colors: 'red'}
                    : {backgroundColor: colors.cardBackground, colors: 'black'}),
                  ...(index === 0 && {
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    paddingTop: 10,
                    borderBottomWidth: 0.3,
                  }),
                  borderBottomWidth: 0.3,
                  ...(index === questions.answers.length - 1 && {
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    paddingBottom: 10,
                    borderBottomWidth: 0,
                  }),
                }}>
                <Text style={{...(answers.includes(answer)
                    ? {backgroundColor: colors.primary, colors: 'green', fontWeight: 'bold', color: 'white'}
                    : {backgroundColor: colors.cardBackground, colors: 'black'}),}}>{answer.answer}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
      {!isLast && <Separator />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    justifyContent: 'flex-start',
    paddingVertical: 10,
  },
  containerNumber: {
    color: 'white',
    backgroundColor: colors.primary,
    marginRight: 10,
    height: 20,
    width: 20,
    textAlign: 'center',
    borderRadius: 20,
    fontWeight: 'bold',
  },
  textQuestion: {
    paddingRight: 20,
    fontWeight: 'bold',
    color: colors.text,
    fontSize: 14,
  },
  containerQuestion: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  answersContainer: {
    marginTop: 15,
    marginBottom: 15,
    paddingHorizontal: 50,
  },
  dividerStyles: {
    width: '100%',
    height: 0.4,
    backgroundColor: 'grey',
  },
  containerAnswer: {
    height: 40,
    paddingLeft: 30,
    justifyContent: 'center',
    borderBottomColor: 'black',
  },
});
