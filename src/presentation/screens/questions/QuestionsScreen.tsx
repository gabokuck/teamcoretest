import React from 'react';
import {ImageTitle} from '../../components/ui/ImageTitle';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {QuestionItem} from '../../components/questions/QuestionItem';
import {useQuery} from '@tanstack/react-query';
import {getQuestions} from '../../../actions/questions';
import { colors } from '../../../config/theme/theme';

export const QuestionsScreen = () => {
  const {isLoading, data = []} = useQuery({
    queryKey: ['questions'],
    queryFn: () => getQuestions(),
    staleTime: 1000 * 60 * 60,
  });

  return (
    <ScrollView>
      <View>
      <ImageTitle safe text="Tenemos un par de preguntas para tí" />
      {isLoading ? (
        <ActivityIndicator  color={colors.primary}/>
      ) : data.length === 0 ? (
        <Text></Text>
      ) : (
        data.map(question => (
          <QuestionItem key={question.question_id} questions={question} />
        ))
      )}
      </View>
      
    </ScrollView>
  );
};


