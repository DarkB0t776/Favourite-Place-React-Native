// Core
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

// Constants
import Colors from '../constants/Colors';

// Other
import ImagePicker from 'react-native-image-picker';

const ImageSelector = ({ onImageTaken }) => {

  const [imageSource, setImageSource] = useState({ uri: '' });

  const options = {
    quality: 0.7,
    noData: true,
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const takeImageHandler = () => {
    ImagePicker.launchCamera(options, (response) => {
      setImageSource({ uri: response.uri });
      onImageTaken(response.uri, response.path);
    })
  }

  return (
    <View style={styles.imageSelector}>
      <View style={styles.imagePreview}>
        {
          !imageSource.uri
            ?
            <Text>No image picked yet.</Text>
            :
            <Image
              style={styles.image}
              source={imageSource}
            />
        }
      </View>
      <Button
        title="Take Image"
        color={Colors.primary}
        onPress={takeImageHandler}
      />
    </View>
  )
}

export default ImageSelector;

const styles = StyleSheet.create({
  imageSelector: {
    alignItems: 'center',
    marginBottom: 15
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1

  },
  image: {
    width: '100%',
    height: '100%'
  }
});
