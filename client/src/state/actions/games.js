export const types = {
  FETCH_GAMES_BUTTON_PRESSED: 'FETCH_GAMES_BUTTON_PRESSED',
  FETCH_GAMES_CANCEL_BUTTON_PRESSED: 'FETCH_GAMES_CANCEL_BUTTON_PRESSED',
  FETCH_GAMES_STARTED: 'FETCH_GAMES_STARTED',
  FETCH_GAMES_SUCCEEDED: 'FETCH_GAMES_SUCCEEDED',
  FETCH_GAMES_FAILED: 'FETCH_GAMES_FAILED',
}

export const fetchGamesButtonPressed = typeString => ({
  type: types.FETCH_GAMES_BUTTON_PRESSED,
  typeString,
})

export const cancelFetchGamesButtonPressed = () => ({
  type: types.FETCH_GAMES_CANCEL_BUTTON_PRESSED,
})

export const fetchGamesStarted = () => ({
  type: types.FETCH_GAMES_STARTED,
})

export const fetchGamesSucceeded = games => ({
  type: types.FETCH_GAMES_SUCCEEDED,
  games,
})

export const fetchGamesFailed = message => ({
  type: types.FETCH_GAMES_FAILED,
  message,
})
