import { all } from 'redux-saga/effects'

import themeSagas from './theme';
import genreSagas from './genres';

function* rootSaga() {
  yield all([
    ...themeSagas,
    ...genreSagas
  ])
}

export default rootSaga;
