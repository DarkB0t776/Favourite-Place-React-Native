import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native';

// Constants
import Colors from '../constants/Colors';

const NewPlaceScreen = ({ navigation }) => {

  const [titleValue, setTitleValue] = useState('');

  const titleChangeHandler = text => {
    setTitleValue(text);
  }

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
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={() => { }}
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
