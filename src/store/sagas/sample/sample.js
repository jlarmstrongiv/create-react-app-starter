import { put, } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from 'store/actions';

// actions and action creators are used
// sagas handle complex chains of events

export function* sampleInitSaga(action) {
  yield put(actions.sampleIsError(false));
  yield put(actions.sampleIsLoading(true));
  try {
    const response = yield axios.get('/endpoint');
    yield put(actions.sampleCreate(response.data));
    yield put(actions.sampleIsLoading(false));
  } catch (error) {
    yield put(actions.sampleIsError(true));
    yield put(actions.sampleIsLoading(false));
  }
}
