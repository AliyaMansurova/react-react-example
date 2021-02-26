import { createSelector } from 'reselect';

export const settingsStateSelector = state => state.settings;

export const sortFieldSelector = createSelector(
  settingsStateSelector,
  ({ sortBy }) => sortBy,
);

export const genresSelector = createSelector(
  settingsStateSelector,
  ({ genres }) => genres,
);

export const selectedGenreSelector = createSelector(
  settingsStateSelector,
  ({ selectedGenre }) => selectedGenre,
);