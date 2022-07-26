export const actionTypes = {
  ADD_GAMES: "ADD_GAMES",
  SET_GAMES: "SET_GAMES",
  FETCH_GAMES: "FETCH_GAMES",
  START_LOADING_GAMES: "START_LOADING_GAMES",
  FINISH_LOADING_GAMES: "FINISH_LOADING_GAMES",
  CHANGE_FETCH_PARAMS: "CHANGE_FETCH_PARAMS",
  FETCH_PLATFORMS: "FETCH_PLATFORMS",
  SET_PLATFORMS: "SET_PLATFORMS",
  FETCH_GAME: "FETCH_GAME",
  SET_GAME: "SET_GAME",
  SET_SCREENSHOTS: "SET_SCREENSHOTS",
  FETCH_SCREENSHOTS: "FETCH_SCREENSHOTS",
};

export const addGamesAction = (payload) => ({
  type: actionTypes.ADD_GAMES,
  payload,
});

export const setGamesAction = (payload) => ({
  type: actionTypes.SET_GAMES,
  payload,
});

export const fetchGamesAction = (payload) => ({
  type: actionTypes.FETCH_GAMES,
  payload,
});

export const changeFetchParamsAction = (payload) => ({
  type: actionTypes.CHANGE_FETCH_PARAMS,
  payload,
});

export const fetchPlatformsAction = () => ({
  type: actionTypes.FETCH_PLATFORMS,
});

export const setPlatformsAction = (payload) => ({
  type: actionTypes.SET_PLATFORMS,
  payload,
});

export const setGameAction = (payload) => ({
  type: actionTypes.SET_GAME,
  payload,
});

export const fetchGameAction = (payload) => ({
  type: actionTypes.FETCH_GAME,
  payload,
});

export const setScreenshotsAction = (payload) => ({
  type: actionTypes.SET_SCREENSHOTS,
  payload,
});

export const fetchScreenshotsAction = (payload) => ({
  type: actionTypes.FETCH_SCREENSHOTS,
  payload,
});
