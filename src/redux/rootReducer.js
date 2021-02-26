import { combineReducers } from 'redux';
import moviesReducer from './movies/reducer';
import settingsReducer from './settings';

const reducers = combineReducers({
  movies: moviesReducer,
  settings: settingsReducer,
});

export default reducers;
