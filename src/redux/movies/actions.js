import { FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_REQUEST } from './actionTypes';
import { setGenres, setSelectedGenre } from '../settings/index';

export const getMovies = ({ sortBy, filter }) => (dispatch, getState) =>  {
  const { settings: { genres }} = getState();
  let query = `http://localhost:4000/movies?limit=50&sortBy=${sortBy}&sortOrder=desc`;
  if (filter) {
    query = `${query}&filter=${filter}`;
  }

  dispatch({
    type: FETCH_MOVIES_REQUEST,
  });
  return fetch(query)
    .then(res => res.json())
    .then(res => {
      const { data } = res;
      dispatch({
        type: FETCH_MOVIES_SUCCESS,
        payload: {
          data
        },
      });
      if (!genres.length) {
        const genres = [...new Set(data
          .map(i => i.genres)
          .flat(1))];
        dispatch(setGenres(genres));
        dispatch(setSelectedGenre(genres[0]));
      }
    })
    .catch(err => {
      dispatch({
        type: FETCH_MOVIES_FAILURE,
        payload: {
          error: err,
        }
      });
    });
};