import {
  ADD_FILM,
  FIND_RATING,
  FIND_NAME,
  FIND_BY_TYPE,
  ADD_TO_FAVORITE,
  FILTER_BY_FAVORITE,
  DELETE_MOVIE,
  UPDATE_MOVIE
} from "./actiontype";
export function addFilm(payload) {
  return { type: ADD_FILM, payload };
}

export function filterByStars(payload) {
  return { type: FIND_RATING, payload };
}

export function filterByName(payload) {
  return { type: FIND_NAME, payload };
}

export function filterByType(payload) {
  return { type: FIND_BY_TYPE, payload };
}

export function filterbyfavorite(payload) {
  return { type: FILTER_BY_FAVORITE, payload };
}
export function addtofavorite(payload) {
  return { type: ADD_TO_FAVORITE, payload };
}
export function deletemovie(payload) {
  return { type:DELETE_MOVIE,payload}
}
export function updatemovie(payload) {
  return {type:UPDATE_MOVIE,payload}
}



