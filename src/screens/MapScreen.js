// Core
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Other
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {

  const [selectedLocation, setSelectedLocation] = useState();

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

    console.log(selectedLocation);
  }

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
  }
});
