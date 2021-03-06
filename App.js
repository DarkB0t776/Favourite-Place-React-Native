// Core
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { init } from './src/database/db';

// Reducers
import rootReducer from './src/store/reducers';

// Navigators
import { PlacesNavigator } from './src/navigation/PlacesNavigator';

init()
  .then(() => {
    console.log('Init database successfully');
  })
  .catch((err) => {
    console.log('Init db failed');
    console.log(err);
  })

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PlacesNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App;

