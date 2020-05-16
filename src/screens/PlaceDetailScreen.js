// Core
import React, { useLayoutEffect } from 'react';
import { StyleSheet, Image, View, Text, ScrollView, } from 'react-native';

// Other
import MapView, { Marker } from 'react-native-maps';

const PlaceDetailScreen = ({ navigation, route }) => {


  const placeId = route.params?.placeId;
  const placeTitle = route.params?.placeTitle;
  const placeImage = `file://${route.params?.placeImage}`;
  const placeCoords = route.params?.placeCoords;


  const mapRegion = {
    latitude: placeCoords.lat,
    longitude: placeCoords.lng,
    latitudeDelta: 0.004757,
    longitudeDelta: 0.006866
  }

  const markerCoordinates = {
    latitude: placeCoords.lat,
    longitude: placeCoords.lng,
  }


  // Header Options
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: placeTitle
    });
  }, [placeTitle]);

  return (
    <View style={styles.details}>
      <Text style={styles.title}>{placeTitle}</Text>
      <Image source={{ uri: placeImage }} style={styles.image} />
      <MapView initialRegion={mapRegion} style={styles.map}>
        <Marker title={placeTitle} coordinate={markerCoordinates} />
      </MapView>
    </View>
  )
}

export default PlaceDetailScreen

const styles = StyleSheet.create({
  details: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: '50%',
  },
  mapContainer: {
    width: '100%',
    height: '100%',
  },
  map: {
    flex: 1
  }
})
