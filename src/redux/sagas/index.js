import { call, put, delay, takeLatest } from 'redux-saga/effects'

/* Genre fetching
function* fetchGenres(action) {
   try {
      const user = yield call();
      yield put({type: "SUCCESS_GET_GENRE", payload: { genres }});
   } catch (e) {
      yield put({type: "FAILURE_GET_GENRE");
   }
}
*/

function* rootSaga() {
  //yield takeLatest("REQUEST_GET_GENRE", fetchGenres);
}

export default rootSaga;
