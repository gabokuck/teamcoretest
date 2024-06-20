import React from 'react';
import {ImageTitle} from '../../components/ui/ImageTitle';
import {
  ActivityIndicator,
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {QuestionItem} from '../../components/questions/QuestionItem';
import {useQuery} from '@tanstack/react-query';
import {getQuestions, sendAnswers} from '../../../actions/questions';
import {colors, globalStyles} from '../../../config/theme/theme';
import {useAnswerStore} from '../../stores/useAnswersStore';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigator/StackNavigator';

export const QuestionsScreen = () => {
  // Carga la data y la guarda en cache
  const {isLoading, data = [], refetch} = useQuery({
    queryKey: ['questions'],
    queryFn: () => getQuestions(),
    staleTime: 1000 * 60 * 60,
  });

  // Obtenemos el estado de las preguntas
  const {answers, reset} = useAnswerStore();

  // Navigator
  const navigation = useNavigation<any>();

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageTitle safe text="Tenemos un par de preguntas para tí" />

        {isLoading ? (
          <ActivityIndicator color={colors.primary} />
        ) : data.length === 0 ? (
          <Text></Text>
        ) : (
          data.map((question, index) => (
            <QuestionItem
              isLast={index === data.length - 1}
              key={question.question_id}
              questions={question}
              index={index + 1}
            />
          ))
        )}

        {isLoading ? (
          <></>
        ) : data.length === 0 ? (
          <Text></Text>
        ) : (
          <Pressable
            disabled={answers.length !== data.length}
            style={{
              ...globalStyles.btnPrimary,
              ...(answers.length === data.length
                ? {backgroundColor: colors.primary, colors: 'red'}
                : {backgroundColor: 'grey', colors: 'black'}),
            }}
            onPress={async() => {
              const resp = await sendAnswers(answers);
              if(resp){
                navigation.navigate('RepeatQuestionsScreen')
                reset();
              }
              
            }}>
            <Text style={globalStyles.btnPrimaryText}>Finalizar</Text>
          </Pressable>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  text: {
    color: colors.primary,
    marginTop: 2,
    fontSize: 10,
  },
  image: {
    width: 220,
    height: 60,
    objectFit: 'scale-down',
    marginLeft: 30,
  },
});
