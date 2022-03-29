import {
  FETCH_ARTILCLES,
  SETPAGENO,
  FETCH_MOVIE,
  SET_SELECTED_GENRES,
  SET_GENRES,
  SET_GENRES_URL,
} from '../action';

const initMovieState = {
  movieData: {},
  genresData: {},
  selectedGenresData: [],
  pageNo: '',
  genres: '[]',
  rating: '',
};

export default (state = initMovieState, action) => {
  switch (action.type) {
    case FETCH_ARTILCLES:
      return {
        ...state,
        movieData: action.payload,
      };

    case FETCH_MOVIE:
      return {
        ...state,
        movieData: action.payload,
        genresData: action.genres,
        pageNo: action.additin[0],
        genres: action.additin[1],
        rating: action.additin[2],
      };

    case SETPAGENO:
      return {
        ...state,
        pageNo: action.payload,
      };

    case SET_SELECTED_GENRES:
      return {
        ...state,
        selectedGenresData: action.payload,
      };
    case SET_GENRES_URL:
      return {
        ...state,
        genres: action.payload,
      };

    case SET_GENRES:
      return {
        ...state,
        genresData: action.payload,
      };

    default:
      return state;
  }
};
