import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { actionTypes, setPlatformsAction } from "../store/actions";
import { API_KEY } from "../constants/api";

const fetchPlatforms = (params) =>
  axios.get("https://api.rawg.io/api/platforms/lists/parents", {
    params,
  });

function* fetchPlatformsWorker() {
  const res = yield call(fetchPlatforms, { key: API_KEY });
  yield put(setPlatformsAction(res.data.results));
}

export function* fetchPlatformsWatcher() {
  yield takeEvery(actionTypes.FETCH_PLATFORMS, fetchPlatformsWorker);
}
