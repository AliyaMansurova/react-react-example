import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortFieldSelector, selectedGenreSelector } from '../../redux/settings/selectors';
import { getMovies } from '../../redux/movies/actions';
import MoviesList from '../MoviesList/MoviesList';
import MoviesFilter from '../MoviesFilter/MoviesFilter';

export default function App() {
  const sortBy = useSelector(sortFieldSelector);
  const selectedGenre = useSelector(selectedGenreSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies({
      sortBy,
      filter: selectedGenre,
    }));
  }, [dispatch, sortBy, selectedGenre]);

  return (
    <div>
      <MoviesFilter />
      <MoviesList />
    </div>
  )
};

