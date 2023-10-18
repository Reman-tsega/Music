import * as types from "./actionTypes";

export const getMusicStart = () => ({
  type: types.GET_MUSIC_START,
});

export const getMusicsSuccess = (musics) => ({
  type: types.GET_MUSIC_SUCCESS,
  payload: musics,
});

export const getMusicsFail = (error) => ({
  type: types.GET_MUSIC_FAIL,
  payload: error,
});

export const deleteMusicStart = (id) => ({
  type: types.DELETE_MUSIC_START,
  payload: id,
});

export const deleteMusicSuccess = () => ({
  type: types.DELETE_MUSIC_SUCCESS,
});

export const deleteMusicFail = (error) => ({
  type: types.DELETE_MUSIC_FAIL,
  payload: error,
});

export const addMusicStart = (music) => ({
  type: types.ADD_MUSIC_START,
  payload: music,
});

export const addMusicSuccess = () => ({
  type: types.ADD_MUSIC_SUCCESS,
});

export const addMusicFail = (error) => ({
  type: types.ADD_MUSIC_FAIL,
  payload: error,
});

export const editMusicStart = (musicDetail) => ({
  type: types.EDIT_MUSIC_START,
  payload: musicDetail,
});

export const editMusicSuccess = () => ({
  type: types.EDIT_MUSIC_SUCCESS,
});

export const editMusicFail = (error) => ({
  type: types.EDIT_MUSIC_FAIL,
  payload: error,
});
