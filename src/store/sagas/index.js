import { takeEvery, all, takeLatest, } from 'redux-saga/effects';
import * as actionTypes from 'store/actions/actionTypes';

import { sampleInitSaga, } from 'store/sagas/sample/sample';

// export function* watchSample() {
//   yield all([
//     takeEvery(actionTypes.SAMPLE_INIT, sampleInitSaga),
//     takeEvery(actionTypes.SAMPLE_INIT, sampleInitSaga),
//   ]);
// }

export function* watchSample() {
  yield takeEvery(actionTypes.SAMPLE_INIT, sampleInitSaga);
}
