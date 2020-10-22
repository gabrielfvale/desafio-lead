import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../services/api';

function* fetchGenres() {
  try {
    const results = yield call(api.get, '/genre/movie/list');
    const { data } = results;
    yield put({type: 'SUCCESS_GET_GENRES', payload: data.genres});

  } catch (e) {
    yield put({type: 'FAILURE_GET_GENRES'});
  }
}

export default [
  takeLatest('REQUEST_GET_GENRES', fetchGenres),
];
