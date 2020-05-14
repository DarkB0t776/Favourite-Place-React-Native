// Core
import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PlaceDetailScreen = () => {

  // Header Options
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Place Detail"
    });
  }, []);

  return (
    <View>
      <Text>Detail</Text>
    </View>
  )
}

export default PlaceDetailScreen

const styles = StyleSheet.create({})
