// Types
import { ADD_PLACE, FETCH_PLACES } from '../types';

import { insertPlace, fetchPlaces } from '../../database/db';

export const addPlace = (title, image) => {

  return async dispatch => {
    try {

      const result = await insertPlace(title, image.imagePath, 'address', 153.2, 12.5);

      dispatch({
        type: ADD_PLACE,
        placeData: {
          id: result.insertId,
          title,
          image: image.imagePath
        }
      })
    } catch (e) {
      console.log(e)
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