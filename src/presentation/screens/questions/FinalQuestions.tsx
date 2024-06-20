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


export const FinalQUestionsScreen = () => {

  // Navigator
  const navigation = useNavigation<any>();

  return (

      <View style={styles.container}>
        <ImageTitle safe text="Ya casi terminamos" />

        <View style={styles.textContainer}>
          <Text style={styles.text}>Finalizado</Text>
        </View>

        
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    verticalAlign: 'middle'
  },
  text: {
    color: colors.primary,
    marginTop: 60,
    fontSize: 40,
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
