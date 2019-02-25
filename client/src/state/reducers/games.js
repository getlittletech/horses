import { types } from '../actions/games'

const initialState = {
  upcoming: null,
  results: null,
  message: null,
  gameType: null,
  startTime: null,
  isFetching: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_GAMES_STARTED:
      return { ...state, isFetching: true }
    case types.FETCH_GAMES_SUCCEEDED:
      console.log(action)
      const { upcoming, results, message, gameType, startTime } = action.games
      return {
        ...state,
        isFetching: false,
        upcoming,
        results,
        message,
        gameType,
        startTime,
        error: null,
      }
    case types.FETCH_GAMES_FAILED:
      return {
        ...initialState,
        error: action.message,
      }
    default:
      return state
  }
}
