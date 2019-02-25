import React from 'react'
import { connect } from 'react-redux'

import Loader from '../../components/feedback/Loader'
import Error from '../../components/feedback/Error'
import RaceList from '../../components/lists/RaceList'

const Statistics = ({ isFetching, error, upcoming, results, message, gameType, startTime }) => {
  if (isFetching) {
    return <Loader />
  }
  if (error) {
    return <Error>{error}</Error>
  }

  const startTimeFormatted = new Date(startTime).toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })

  if (upcoming) {
    return <RaceList title={`${gameType} - closest upcoming game (${startTimeFormatted})`} races={upcoming} />
  }

  if (results) {
    return <RaceList title={`${gameType} - closest past game results (${startTimeFormatted})`} races={results} />
  }

  if (message) return <div>{message}</div>

  return null
}

const mapStateToProps = (state, ownProps) => {
  return {
    isFetching: state.games.isFetching,
    error: state.games.error,
    upcoming: state.games.upcoming,
    results: state.games.results,
    message: state.games.message,
    gameType: state.games.gameType,
    startTime: state.games.startTime,
  }
}

export default connect(mapStateToProps)(Statistics)
