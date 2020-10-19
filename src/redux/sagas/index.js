import { all } from 'redux-saga/effects'

import themeSagas from './theme';

function* rootSaga() {
  yield all([
    ...themeSagas
  ])
}

export default rootSaga;
