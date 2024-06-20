import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import { SplashScreen } from '../screens/splash/SplashScreen';
import { QuestionsScreen } from '../screens/questions/QuestionsScreen';
import { RepeatQuestionsScreen } from '../screens/questions/RepeatQuestions';
import { FinalQUestionsScreen } from '../screens/questions/FinalQuestions';

export type RootStackParams = {
  HomeScreen: undefined;
  SplashScreen: undefined;
  QuestionsScreen: undefined;
  RepeatQuestionsScreen: undefined;
  FinalQUestionsScreen: undefined
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="QuestionsScreen" component={QuestionsScreen} />
      <Stack.Screen name="RepeatQuestionsScreen" component={RepeatQuestionsScreen} />
      <Stack.Screen name="FinalQUestionsScreen" component={FinalQUestionsScreen} />
    </Stack.Navigator>
  );
};
