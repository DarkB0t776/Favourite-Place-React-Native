import { combineReducers } from 'redux';
import placesReducer from '../reducers/places';

const rootReducer = combineReducers({
  places: placesReducer
});

export default rootReducer;