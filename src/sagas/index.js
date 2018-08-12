import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { getMobile } from 'api'
import { FETCH_FAIL, FETCH_SUCCEED, FETCH_REQUESTED } from 'store/actionType'

function* fetchData(action) {
  try {
    const payload = yield call(getMobile)
    yield put({ type: FETCH_SUCCEED, payload })
  } catch (error) {
    yield put({ type: FETCH_FAIL, error })
  }
}

export default function* watchFetchData() {
  yield* takeEvery(FETCH_REQUESTED, fetchData)
}
