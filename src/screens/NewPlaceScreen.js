import React, { useLayoutEffect, useEffect, useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
  Alert
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

  const [titleValid, setTitleValid] = useState(false);
  const [titleValue, setTitleValue] = useState('');
  const [selectedImage, setSelectedImage] = useState({ imagePath: '' });
  const [selectedLocation, setSelectedLocation] = useState();
  const dispatch = useDispatch();

  const titleChangeHandler = text => {
    setTitleValue(text);
  };

  const savePlaceHandler = () => {
    if (!titleValid) {
      Alert.alert('Warning', 'Please check errors', [
        { text: 'Okay' }
      ]);
      return;
    }
    dispatch(placesActions.addPlace(titleValue, selectedImage, selectedLocation));
    navigation.goBack();
  };

  const imageTakenHandler = (imagePath) => {
    setSelectedImage({ imagePath });
  }

  const locationPickedHandler = useCallback(location => {
    setSelectedLocation(location);
  }, []);

  const validateTitle = useCallback((title) => {
    if (title.length > 1) {
      setTitleValid(true);
    } else {
      setTitleValid(false);
    }
  }, [titleValue]);


  useEffect(() => {
    validateTitle(titleValue);
  }, [titleValue]);

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
        {
          !titleValid && <Text style={styles.error}>You must provide a title</Text>
        }
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
    marginBottom: 5,
    paddingVertical: 4,
    paddingHorizontal: 2
  },
  error: {
    color: 'red',
    marginBottom: 10
  }
})
