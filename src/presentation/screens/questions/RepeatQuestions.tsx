import React from 'react';
import {ImageTitle} from '../../components/ui/ImageTitle';
import {

  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {colors, globalStyles, } from '../../../config/theme/theme';

import { useNavigation } from '@react-navigation/native';


export const RepeatQuestionsScreen = () => {

  // Navigator
  const navigation = useNavigation<any>();

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageTitle safe text="Ya casi terminamos" />

        <View style={styles.textContainer}>
          <Text style={styles.text}>Te gustaria intentarlo una vez más?</Text>
        </View>

        <Pressable
            style={{
              ...globalStyles.btnPrimary,
              marginTop: 60
            }}
            onPress={() => {
              navigation.navigate('HomeScreen')
              
            }}>
            <Text style={globalStyles.btnPrimaryText}>Si</Text>
          </Pressable>
          <Pressable
            style={{
              ...globalStyles.btnPrimary,
              backgroundColor: 'red',
              marginTop: 10
            }}
            onPress={() => {
              navigation.navigate('FinalQUestionsScreen')
              
            }}>
            <Text style={globalStyles.btnPrimaryText}>No</Text>
          </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  text: {
    color: colors.primary,
    marginTop: 20,
    fontSize: 18,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 220,
    height: 60,
    objectFit: 'scale-down',
    marginLeft: 30,
  },
});
