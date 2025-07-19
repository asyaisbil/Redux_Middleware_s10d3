import FavMovie from '../../components/FavMovie';
import { movies } from '../../data';

import { movies } from '../../data.js';
import { ADD_FAVS, NEXT_MOVIE, PREV_MOVIE, REMOVE_MOVIE } from '../actions';

const initialState = {
  movies: movies,
  favMovies: [],
  sira: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_MOVIE:
      return {
        ...state,
        sira: state.sira + 1,
      };

    case PREV_MOVIE:
      return {
        ...state,
        sira: state.sira - 1,
      };

    case ADD_FAVS:
      return {
        ...state,
        favMovies: [...state.favMovies, state.movies[state.sira]],
        movies: state.movies.filter(
          (mov) => mov.id !== state.movies[state.sira].id
        ),
        sira: state.sira === 0 ? 0 : state.sira - 1,
      };

    case REMOVE_MOVIE:
      const movieToRemove = state.favMovies.find(
        (movie) => movie.id === action.payload
      );
      return {
        ...state,
        favMovies: state.favMovies.filter((mov) => mov.id !== action.payload),
        movies: [...state.movies, movieToRemove],
      };

    default:
      return state;
  }
};
