// Types
import { ADD_PLACE, FETCH_PLACES } from '../types'

// Other
import { insertPlace, fetchPlaces } from '../../database/db';

export const addPlace = (title, image, location) => {

  return async dispatch => {
    try {
      const result = await insertPlace(title, image.imagePath, location.lat, location.lng);

      dispatch({
        type: ADD_PLACE,
        placeData: {
          id: result.insertId,
          title,
          image: image.imagePath,
          coords: {
            lat: location.lat,
            lng: location.lng
          }
        }
      })
    } catch (e) {
      throw e
    }
  }

}

export const loadPlaces = () => {
  return async dispatch => {
    try {
      const result = await fetchPlaces();
      dispatch({ type: FETCH_PLACES, places: result.rows._array })

    } catch (err) {
      throw err;
    }
  }
}