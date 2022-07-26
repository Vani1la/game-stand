import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { actionTypes, setScreenshotsAction } from "../store/actions";
import { API_KEY } from "../constants/api";

const fetchScreenshotsGame = (id) =>
  axios.get(`https://api.rawg.io/api/games/${id}/screenshots`, {
    params: { key: API_KEY },
  });

function* fetchScreenshotsGameWorker({ payload }) {
  const res = yield call(fetchScreenshotsGame, payload.id);
  yield put(setScreenshotsAction(res.data.results));
}

export function* fetchScreenshotsGameWatcher() {
  yield takeEvery(actionTypes.FETCH_SCREENSHOTS, fetchScreenshotsGameWorker);
}
