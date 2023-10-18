import { takeLatest, all, put, fork } from "redux-saga/effects";
import * as types from "./actionTypes";
import firebaseDb from "../firebase";
import {
  getMusicsSuccess,
  getMusicsFail,
  deleteMusicSuccess,
  deleteMusicFail,
  addMusicSuccess,
  addMusicFail,
  editMusicSuccess,
  editMusicFail,
} from "./actions";

export function* onLoadMusicAsync() {
  try {
    const musics = yield new Promise((resolve) =>
      firebaseDb.child("musics").on("value", resolve)
    );
    if (musics.val() !== null) {
      yield put(getMusicsSuccess(musics.val()));
    } else {
      yield put(getMusicsSuccess({}));
    }
  } catch (error) {
    yield put(getMusicsFail());
  }
}

export function* onDeleteMusicAsync({ payload: id }) {
  try {
    yield firebaseDb.child(`musics/${id}`).remove();
    yield put(deleteMusicSuccess());
  } catch (error) {
    yield put(deleteMusicFail());
  }
}

export function* onAddMusicAsync({ payload: music }) {
  try {
    yield firebaseDb.child("musics").push(music);
    yield put(addMusicSuccess());
  } catch (error) {
    yield put(addMusicFail());
  }
}

export function* onEditMusicAsync({
  payload: { id, initialState: music },
}) {
  try {
    yield firebaseDb.child(`musics/${id}`).set(music);
    yield put(editMusicSuccess());
  } catch (error) {
    yield put(editMusicFail());
  }
}

export function* onLoadMusics() {
  yield takeLatest(types.GET_MUSIC_START, onLoadMusicAsync);
}

export function* onDeleteMusic() {
  yield takeLatest(types.DELETE_MUSIC_START, onDeleteMusicAsync);
}

export function* onAddMusic() {
  yield takeLatest(types.ADD_MUSIC_START, onAddMusicAsync);
}

export function* onEditMusic() {
  yield takeLatest(types.EDIT_MUSIC_START, onEditMusicAsync);
}

const musicSagas = [
  fork(onLoadMusics),
  fork(onDeleteMusic),
  fork(onAddMusic),
  fork(onEditMusic),
];

export default function* rootSaga() {
  yield all([...musicSagas]);
}
