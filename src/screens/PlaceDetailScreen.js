// Core
import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PlaceDetailScreen = ({ navigation, route }) => {

  const placeTitle = route.params?.placeTitle;
  const placeId = route.params?.placeId;

  // Header Options
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: placeTitle
    });
  }, [placeTitle]);

  return (
    <View>
      <Text>Detail</Text>
    </View>
  )
}

export default PlaceDetailScreen

const styles = StyleSheet.create({})
