// Core
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Constants
import Colors from '../constants/Colors';

// Screens
import PlaceListScreen from '../screens/PlaceListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';

const PlacesStackNavigator = createStackNavigator();

// Default navigation options
const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primary
  },
  headerTintColor: 'white'
}

export const PlacesNavigator = () => {
  return (
    <PlacesStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <PlacesStackNavigator.Screen name="Places" component={PlaceListScreen} />
      <PlacesStackNavigator.Screen name="PlaceDetail" component={PlaceDetailScreen} />
      <PlacesStackNavigator.Screen name="NewPlace" component={NewPlaceScreen} />
      <PlacesStackNavigator.Screen name="Map" component={MapScreen} />
    </PlacesStackNavigator.Navigator>
  );
}