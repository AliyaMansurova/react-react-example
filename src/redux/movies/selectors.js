import { createSelector } from 'reselect';

export const moviesStateSelector = state => state.movies;

export const moviesSelector = createSelector(
  moviesStateSelector,
  ({ data }) => data,
);
