import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../../config/theme/theme';
import { useSplashScreenTimer } from '../../hooks/useSplashScreenTimer';

export const SplashScreen = () => {

    // customhook timer splash screen
    useSplashScreenTimer();
    
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../../assets/logo-white.png')}/>
      <Text style={styles.text}>Mejora tu productividad y eficiencia</Text>
      <ActivityIndicator style={styles.activityIndicator} size="large" color="#fff" />
    </View>
  )
};


const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.primary,
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    text: {
        color: 'white',
        marginTop: 2,
        fontSize: 10,
    },
    image: {
        width: 220,
        height: 60,
        objectFit: 'scale-down',
        marginLeft: 30
    },
    activityIndicator: {
        marginTop: 40
    }
});