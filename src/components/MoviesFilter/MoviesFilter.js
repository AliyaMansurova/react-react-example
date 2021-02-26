import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  sortFieldSelector, genresSelector, selectedGenreSelector,
} from '../../redux/settings/selectors';
import {setSelectedGenre, setSortField} from '../../redux/settings/index';

const orderOptions = [
  {
    key: "release_date",
    description: "release date"
  },
  {
    key: "vote_average",
    description: "rating"
  },
];

export default function MoviesFilter() {
  const genres = useSelector(genresSelector);
  const selectedGenre = useSelector(selectedGenreSelector);
  const sortBy = useSelector(sortFieldSelector);
  const dispatch = useDispatch();

  const handleSortByUpdate = useCallback((e) => {
    dispatch(setSortField(e.target.value));
  },[dispatch]);

  const handleSelectGenre = useCallback((genre) => {
    dispatch(setSelectedGenre(genre));
  },[dispatch]);

  return (
    <div className="filter layout-2-column">
      <ul className="genres">
        <li className="genre-active" key="all">
          <span onClick={() => handleSelectGenre(undefined)}>
            all
          </span>
        </li>
        {
          genres.map(genre => (
            <li key={genre}>
              <span onClick={() => handleSelectGenre(genre)}>{genre}</span>
              <div />
            </li>
          ))
        }
      </ul>
      <div className="ordering-container">
        <span>sort by</span>
        <select className="ordering-select" value={sortBy} onChange={handleSortByUpdate}>
          {
            orderOptions.map(opt => (
              <option value={opt.key} key={opt.key} >
                {opt.description}
              </option>
            ))
          }
        </select>
      </div>
    </div>
  )
};