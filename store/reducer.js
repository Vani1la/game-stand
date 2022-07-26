import { HYDRATE } from "next-redux-wrapper";
import { actionTypes } from "./actions";
import { API_KEY, PAGE_SIZE } from "../constants/api";

const defaultState = {
  gamesList: [],
  gamesIsLoading: false,
  platforms: [],
  currentGame: {},
  screenshots: [],
  fetchParams: {
    page: 1,
    key: API_KEY,
    page_size: PAGE_SIZE,
    parent_platforms: "1",
    ordering: "-rating",
  },
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case HYDRATE: {
      if (action.payload.gamesList.length && state.gamesList.length) {
        return state;
      }
      return { ...state, ...action.payload };
    }
    case actionTypes.FETCH_GAMES:
      return { ...state, gamesIsLoading: true };
    case actionTypes.ADD_GAMES:
      return {
        ...state,
        gamesList: [...state.gamesList, ...action.payload],
        gamesIsLoading: false,
        fetchParams: { ...state.fetchParams, page: state.fetchParams.page + 1 },
      };
    case actionTypes.SET_GAMES:
      return {
        ...state,
        gamesList: action.payload,
        gamesIsLoading: false,
        fetchParams: { ...state.fetchParams, page: 2 },
      };
    case actionTypes.CHANGE_FETCH_PARAMS:
      return {
        ...state,
        fetchParams: { ...state.fetchParams, ...action.payload },
      };
    case actionTypes.SET_PLATFORMS:
      return { ...state, platforms: action.payload };
    case actionTypes.SET_GAME:
      return { ...state, currentGame: action.payload };
    case actionTypes.SET_SCREENSHOTS:
      return { ...state, screenshots: action.payload };
    default:
      return state;
  }
};

export default reducer;
