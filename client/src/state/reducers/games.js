import { types } from '../actions/games'

const initialState = {
  games: [],
  isFetching: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_GAMES_STARTED:
      return { ...state, isFetching: true }
    case types.FETCH_GAMES_SUCCEEDED:
      const { games } = action
      return { ...state, isFetching: false, games, error: null }
    case types.FETCH_GAMES_FAILED:
      return { ...state, isFetching: false, error: action.message }
    default:
      return state
  }
}
