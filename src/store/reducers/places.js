import { ADD_PLACE, FETCH_PLACES, DELETE_PLACE } from '../types';
import Place from '../../models/Place';

const initialState = {
  places: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLACES:
      return {
        places: action.places.map(pl => new Place(
          pl.id.toString(),
          pl.title,
          pl.imageUri,
          pl.lat,
          pl.lng
        ))
      }
    case ADD_PLACE:
      const newPlace = new Place(
        action.placeData.id.toString(),
        action.placeData.title,
        action.placeData.image,
        action.placeData.coords.lat,
        action.placeData.coords.lng,
      );
      return {
        places: state.places.concat(newPlace)
      };
    case DELETE_PLACE:
      return {
        places: state.places.filter(pl => pl.id !== action.placeId)
      }
    default:
      return state;
  }
}