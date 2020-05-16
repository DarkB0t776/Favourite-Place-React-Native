// Core
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import * as placesActions from '../store/actions/places';

// Constants
import Colors from '../constants/Colors';

// Other
import Icon from 'react-native-vector-icons/Ionicons';

const PlaceItem = props => {

  const dispatch = useDispatch();

  const image = `file://${props.image}`;
  const id = props.id;

  const onDeleteHandler = (imageId, imagePath) => {
    Alert.alert('Delete item', 'Are you sure?', [
      { text: 'Yes', onPress: () => dispatch(placesActions.removePlace(imageId, imagePath)) },
      { text: 'No' }
    ])
  }


  return (
    <View style={styles.placeItem}>
      <TouchableOpacity onPress={props.onSelect} style={styles.infoContainer}>
        <Image style={styles.image} source={{ uri: image }} />
        <Text style={styles.title}>{props.title}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDeleteHandler(id, props.image)}>
        <Icon name="md-trash" size={25} color="black" />
      </TouchableOpacity>
    </View>
  );
};


export default PlaceItem;

const styles = StyleSheet.create({
  placeItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ccc',
    borderColor: Colors.primary,
    borderWidth: 1
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%'
  },
  title: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5
  },
  icon: {
    borderWidth: 1,
    borderColor: 2,
    width: 20,
    height: 20
  }
});
