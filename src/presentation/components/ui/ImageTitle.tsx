import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../../config/theme/theme';

interface Props {
  text: string;
  safe?: boolean;
  white?: boolean;
}

export const ImageTitle = ({text, safe = false, white = false}: Props) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <Image style={{...styles.image, marginTop: safe ? top + 20 : 20}} source={require('../../../assets/logo.png')} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 20
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
    marginLeft: 30
  },
});
