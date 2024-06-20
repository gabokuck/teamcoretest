import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StackNavigator } from './presentation/navigator/StackNavigator';

const queryClient = new QueryClient();

export const TeamcoreApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
};
