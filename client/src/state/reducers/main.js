import { combineReducers } from 'redux'

import games from './games'

const mainReducer = combineReducers({
  games,
})

export default mainReducer
