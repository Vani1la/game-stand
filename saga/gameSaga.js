import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { actionTypes, setGameAction } from "../store/actions";
import { API_KEY } from "../constants/api";

const fetchGame = (id) =>
  axios.get(`https://api.rawg.io/api/games/${id}`, {
    params: { key: API_KEY },
  });

function* fetchGameWorker({ payload }) {
  const res = yield call(fetchGame, payload.id);
  yield put(setGameAction(res.data));
}

export function* fetchGameWatcher() {
  yield takeEvery(actionTypes.FETCH_GAME, fetchGameWorker);
}
