import React from 'react';
import { useSelector } from 'react-redux';
//example with selectors
//import { moviesSelector } from '../../redux/movies/selectors';

export default function MoviesList() {
  //const movies = useSelector(moviesSelector);
  const movies = useSelector(state => state.movies.data);

  return (
    <div>
      {movies.map(m => (
        <div key={m.id}>
          <span>{`title: ${m.title}, year: ${m.release_date}`}</span>
        </div>
      ))}
    </div>
  )
};