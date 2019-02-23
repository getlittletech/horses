import { call, put, take, takeEvery, cancel, cancelled } from 'redux-saga/effects'
import { getGames } from '../../services/data'
import { types, fetchGamesStarted, fetchGamesSucceeded, fetchGamesFailed } from '../actions/games'

function* fetchGames(action) {
  try {
    yield put(fetchGamesStarted())
    const games = yield call(getGames, action.typeString)
    yield put(fetchGamesSucceeded(games))
  } catch ({ message }) {
    yield put(fetchGamesFailed(message))
  } finally {
    if (yield cancelled()) {
      yield put(fetchGamesFailed('You have cancelled the request'))
    }
  }
}

function* gamesSaga() {
  while (true) {
    const fetchTask = yield takeEvery(types.FETCH_GAMES_BUTTON_PRESSED, fetchGames)
    yield take(types.FETCH_GAMES_CANCEL_BUTTON_PRESSED)
    yield cancel(fetchTask)
  }
}

export default gamesSaga
