import React, { useLayoutEffect, useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button
} from 'react-native';
import { useDispatch } from 'react-redux';

// Actions
import * as placesActions from '../store/actions/places';

// Constants
import Colors from '../constants/Colors';

// Components
import ImageSelector from '../components/ImageSelector';
import LocationPicker from '../components/LocationPicker';

// Other


const NewPlaceScreen = ({ navigation }) => {

  const [titleValue, setTitleValue] = useState('');
  const [selectedImage, setSelectedImage] = useState({ imagePath: '' });
  const [selectedLocation, setSelectedLocation] = useState();
  const dispatch = useDispatch();

  const titleChangeHandler = text => {
    setTitleValue(text);
  };

  const savePlaceHandler = () => {
    dispatch(placesActions.addPlace(titleValue, selectedImage, selectedLocation));
    navigation.goBack();
  };

  const imageTakenHandler = (imagePath) => {
    setSelectedImage({ imagePath });
  }

  const locationPickedHandler = useCallback(location => {
    setSelectedLocation(location);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Add Place'
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <ImageSelector
          onImageTaken={imageTakenHandler}
        />
        <LocationPicker
          onLocationPicked={locationPickedHandler}
        />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  )
}

export default NewPlaceScreen

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  label: {
    fontSize: 18,
    marginBottom: 15
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2
  }
})
