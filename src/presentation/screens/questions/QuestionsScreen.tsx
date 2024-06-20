import React from 'react';
import {ImageTitle} from '../../components/ui/ImageTitle';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {QuestionItem} from '../../components/questions/QuestionItem';
import {useQuery} from '@tanstack/react-query';
import {getQuestions} from '../../../actions/questions';
import {colors} from '../../../config/theme/theme';

export const QuestionsScreen = () => {
  const {isLoading, data = []} = useQuery({
    queryKey: ['questions'],
    queryFn: () => getQuestions(),
    staleTime: 1000 * 60 * 60,
  });

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
