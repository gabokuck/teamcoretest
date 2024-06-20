import React from 'react';
import { useSplashScreenTimer } from '../../hooks/useSplashScreenTimer';
import { SplashScreen } from '../splash/SplashScreen';
import { QuestionsScreen } from '../questions/QuestionsScreen';

export const HomeScreen = () => {

  const { isLoading } = useSplashScreenTimer();


  return (
  <>
      {
      isLoading
      ?(<SplashScreen/>)
      :(<QuestionsScreen/>)
    }
  
  </>
  )
};
