import { call, put, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

function* fetchTheme() {
  try {
    const theme = yield call(AsyncStorage.getItem, 'theme');

    if (theme !== null) {
      yield put({type: 'SUCCESS_GET_THEME', payload: { theme }});
    } else {
      yield call(AsyncStorage.setItem, 'theme', 'light');
      yield put({type: 'SUCCESS_GET_THEME', payload: { theme: 'light' }});
    }

  } catch (e) {
    yield put({type: 'FAILURE_GET_THEME'});
  }
}

function* setTheme(action) {
  try {
    yield call(AsyncStorage.setItem, 'theme', action.payload.theme);

    yield put({type: 'SUCCESS_SET_THEME'});

  } catch (e) {
    yield put({type: 'FAILURE_SET_THEME'});
  }
}

function* switchTheme() {
  try {
    yield call(fetchTheme);
    const themeName = yield call(AsyncStorage.getItem, 'theme');
    const newTheme = themeName === 'light' ? 'dark' : 'light';

    yield call(AsyncStorage.setItem, 'theme', newTheme);

    yield put({type: 'SUCCESS_SWITCH_THEME', payload: { theme: newTheme }});

  } catch (e) {
    yield put({type: 'FAILURE_SWITCH_THEME'});
  }
}

export default [
  takeLatest('REQUEST_GET_THEME', fetchTheme),
  takeLatest('REQUEST_SET_THEME', setTheme),
  takeLatest('REQUEST_SWITCH_THEME', switchTheme),
];
