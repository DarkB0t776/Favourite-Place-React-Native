import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PlaceListScreen = ({ navigation }) => {

  // Header Options
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "All Places"
    });
  }, []);

  return (
    <View>
      <Text>Places</Text>
    </View>
  )
}

export default PlaceListScreen

const styles = StyleSheet.create({})
