export const NEXT_MOVIE = 'NEXT_MOVIE';
export const PREV_MOVIE = 'PREV_MOVIE';
export const ADD_FAVS = 'ADD_FAVS';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';

export const nextMovie = () => {
  return { type: NEXT_MOVIE };
};

export const prevMovie = () => {
  return { type: PREV_MOVIE };
};

export const addFavs = () => {
  return { type: ADD_FAVS };
};

export const removeMovie = (id) => {
  return { type: REMOVE_MOVIE, payload: id };
};
