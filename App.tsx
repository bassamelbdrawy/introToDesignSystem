import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import type { RootStackParamList } from './navigation/types';
import BadPractiseScreen from './screens/BadPractiseScreen';
import GoodPractiseScreen from './screens/GoodPractiseScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerBackTitle: 'Back',
            headerTintColor: '#1C1917',
            headerStyle: { backgroundColor: '#F7F4EF' },
            headerShadowVisible: false,
            contentStyle: { backgroundColor: '#F7F4EF' },
          }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GoodPractise"
            component={GoodPractiseScreen}
            options={{ title: 'Good practise' }}
          />
          <Stack.Screen
            name="BadPractise"
            component={BadPractiseScreen}
            options={{ title: 'Bad practise' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
