// Core
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Navigators
import { PlacesNavigator } from './src/navigation/PlacesNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <PlacesNavigator />
    </NavigationContainer>
  )
}

export default App;

