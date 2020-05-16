// Core
import React, { useState, useLayoutEffect, useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

// Other
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ navigation }) => {

  const [selectedLocation, setSelectedLocation] = useState();

  // Header Options
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.headerButton} onPress={saveLocationHandler}>
          <Text style={styles.saveHeader}>Save</Text>
        </TouchableOpacity>
      )
    });
  }, [selectedLocation]);

  const mapRegion = {
    latitude: 49.233082,
    longitude: 28.468218,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  const selectLocationHandler = event => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    })

  }

  const saveLocationHandler = useCallback(() => {
    console.log(selectedLocation);
    if (!selectedLocation) {
      Alert.alert('No location selected', 'To save you need to select location', [
        { text: 'Okay' }
      ])
      return;
    }
    navigation.navigate('NewPlace', {
      pickedLocation: selectedLocation
    });
  }, [selectedLocation])

  let markerCoordinates;
  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng
    }
  }

  return (
    <MapView
      style={styles.map}
      region={mapRegion}
      onPress={selectLocationHandler}
    >
      {markerCoordinates && <Marker title="Picked Location" coordinate={markerCoordinates} />}
    </MapView>
  )
}

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  headerButton: {
    marginHorizontal: 20,
  },
  saveHeader: {
    fontSize: 16,
    color: 'white'
  }
});
