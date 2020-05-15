// Core
import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, ActivityIndicator, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';

// Constants
import Colors from '../constants/Colors';
import MapPreview from '../components/MapPreview';

// Other
import * as Location from "expo-location";

const LocationPicker = () => {

  const [isFetching, setIsFetching] = useState(false);
  const [permissions, setPermissions] = useState(false);
  const [location, setLocation] = useState();
  const navigation = useNavigation();

  const getLocationHandler = async () => {

    try {
      let { status } = await Location.requestPermissionsAsync();
      if (status === 'granted') {
        setPermissions(true);
      }
    } catch (err) {
      console.log(err);
    }
    if (permissions) {
      try {
        setIsFetching(true);
        const loc = await Location.getCurrentPositionAsync({ timeout: 5000 });
        setLocation({
          lat: loc.coords.latitude,
          lng: loc.coords.longitude
        });
      } catch (err) {
        console.log(err);
        Alert.alert('Could not get location', 'Pick location on the map instead', [
          { text: 'Okay' }
        ]);
      }
      setIsFetching(false);
    }
  }

  const pickOnMapHandler = () => {
    navigation.navigate('Map');
  };



  return (
    <View style={styles.locationPicker}>
      <MapPreview
        style={styles.mapPreview}
        location={location}
        onPress={pickOnMapHandler}
      >
        <View>
          {
            isFetching
              ?
              <ActivityIndicator size="large" color={Colors.primary} />
              :
              <Text>No location chosen yet!</Text>
          }
        </View>
      </MapPreview>
      <View style={styles.actions}>
        <Button
          title="Get User Location"
          color={Colors.primary}
          onPress={getLocationHandler}
        />
        <Button
          title="Pick on Map"
          color={Colors.primary}
          onPress={pickOnMapHandler}
        />
      </View>
    </View>
  )
}

export default LocationPicker

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15
  },
  mapPreview: {
    marginBottom: 10,
    width: '100%',
    height: 150,
    borderColor: '#ccc',
    borderWidth: 1
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  }
})
