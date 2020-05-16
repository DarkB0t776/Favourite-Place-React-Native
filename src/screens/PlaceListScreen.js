import React, { useLayoutEffect, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import * as placesActions from '../store/actions/places';


// Component
import HeaderButton from '../components/HeaderButton';
import PlaceItem from '../components/PlaceItem';

// Other
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const PlaceListScreen = ({ navigation }) => {

  const places = useSelector(state => state.places.places);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(placesActions.loadPlaces());
  }, []);

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
    <FlatList
      data={places}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => {
        return (
          <PlaceItem
            image={item.imageUri}
            title={item.title}
            onSelect={() => navigation.navigate('PlaceDetail', {
              placeTitle: item.title,
              placeId: item.id.toString(),
              placeImage: item.imageUri,
              placeCoords: {
                lat: item.lat,
                lng: item.lng
              }
            })}
          />
        )
      }}

    />
  )
}

export default PlaceListScreen

const styles = StyleSheet.create({})
