import { all } from "redux-saga/effects";
import { gamesListWatcher } from "./gamesListSaga";
import { fetchPlatformsWatcher } from "./platformsSaga";
import { fetchGameWatcher } from "./gameSaga";
import { fetchScreenshotsGameWatcher } from "./screenshotsSaga";

export default function* rootWatcher() {
  yield all([
    gamesListWatcher(),
    fetchPlatformsWatcher(),
    fetchGameWatcher(),
    fetchScreenshotsGameWatcher(),
  ]);
}
