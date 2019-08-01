import arr from "./data";
import {
  ADD_FILM,
  FIND_RATING,
  FIND_NAME,
  FIND_BY_TYPE,
  ADD_TO_FAVORITE,
  FILTER_BY_FAVORITE,
  DELETE_MOVIE,
  UPDATE_MOVIE
} from "../actions/actiontype";
const initialState = {
  arr,
  Findbyrating: 1,
  Findbyname: "",
  type: "",
  favorite: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILM:
      return { ...state, arr: [...state.arr, action.payload] };
    case FIND_RATING:
      return { ...state, Findbyrating: action.payload };
    case FIND_NAME:
      return { ...state, Findbyname: action.payload };
    case FIND_BY_TYPE:
      return { ...state, type: action.payload };
    case FILTER_BY_FAVORITE:
      return { ...state, favorite: !state.favorite };
    case ADD_TO_FAVORITE:
      return {
        ...state,
        arr: state.arr.map(el =>
          el.id === action.payload ? { ...el, favorite: !el.favorite } : el
        )
      };
    case DELETE_MOVIE:
      return {
        ...state,
        arr: state.arr.filter(el => el.id !== action.payload)
      };
    case UPDATE_MOVIE:
      return {
        ...state,
        arr: state.arr.map(el =>
          el.id === action.payload.id ? { ...el, ...action.payload } : el
        )
      };
    default:
      return state;
  }
};

export default rootReducer;
