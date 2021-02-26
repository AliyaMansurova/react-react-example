export const SET_SORT_ORDER = 'SET_SORT_ORDER';
export const SET_SORT_FIELD = 'SET_SORT_FIELD';
export const SET_GENRE = 'SET_GENRE';
export const SET_GENRES = 'SET_GENRES';

//actions
export const setSortField = (field) => ({
  type: SET_SORT_FIELD,
  payload: {
    sortBy: field,
  }
});

export const setGenres = (genres) => ({
  type: SET_GENRES,
  payload: {
    genres,
  }
});

export const setSelectedGenre = (selectedGenre) => ({
  type: SET_GENRES,
  payload: {
    selectedGenre,
  }
});

//reducer
export const initialState = {
  sortBy: 'release_date',
  genres: [],
  selectedGenre: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_FIELD:
    case SET_SORT_ORDER:
    case SET_GENRES:
    case SET_GENRE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}