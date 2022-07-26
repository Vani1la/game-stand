import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { actionTypes } from "../store/actions";

const fetchGamesList = (params) =>
  axios.get("https://api.rawg.io/api/games", {
    params,
  });

function* fetchGamesListWorker({ payload }) {
  const res = yield call(fetchGamesList, payload.params);
  yield put(payload.action(res.data.results));
}

export function* gamesListWatcher() {
  yield takeEvery(actionTypes.FETCH_GAMES, fetchGamesListWorker);
}
