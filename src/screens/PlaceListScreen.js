import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Component
import HeaderButton from '../components/HeaderButton';

// Other
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const PlaceListScreen = ({ navigation }) => {

  // Header Options
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "All Places",
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Add Place"
            iconName="md-add"
            onPress={() => navigation.navigate('NewPlace')}
          />
        </HeaderButtons>
      )
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
