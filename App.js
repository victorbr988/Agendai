import React from 'react';
import { useFonts, Rajdhani_700Bold, Rajdhani_600SemiBold, Rajdhani_400Regular, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/pages/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Rajdhani_700Bold,
    Rajdhani_600SemiBold,
    Rajdhani_400Regular,
    Rajdhani_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
