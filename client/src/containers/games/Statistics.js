import React from 'react'
import { connect } from 'react-redux'

import Loader from '../../components/feedback/Loader'
import Error from '../../components/feedback/Error'

const Statistics = ({ isFetching, error, games }) => {
  if (isFetching) {
    return <Loader />
  }
  if (error) {
    return <Error>{error}</Error>
  }

  return <div>Stats</div>
}

const mapStateToProps = (state, ownProps) => {
  return {
    isFetching: state.games.isFetching,
    error: state.games.error,
    games: state.games.games,
  }
}

export default connect(mapStateToProps)(Statistics)
