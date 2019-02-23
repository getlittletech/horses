import { all } from 'redux-saga/effects'
import gamesSaga from './games'

export default function* mainSaga() {
  yield all([gamesSaga()])
}
