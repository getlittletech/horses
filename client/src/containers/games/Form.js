import React, { useState } from 'react'
import { connect } from 'react-redux'
import styles from './Form.css'
import { fetchGamesButtonPressed, cancelFetchGamesButtonPressed } from '../../state/actions/games'

export const Form = props => {
  const [game, setGame] = useState({ type: '' })
  return (
    <div className={styles.wrapper}>
      <form
        onSubmit={event => {
          event.preventDefault()
          props.submit(game.type, props.isFetching)
        }}
      >
        <div className={styles.row}>
          <label>Enter the name of the game and get information about it.</label>
        </div>
        <div className={styles.row}>
          <label>Name of the game: </label>
          <input type='text' onChange={event => setGame({ type: event.target.value })} />
          <button
            onClick={event => {
              event.preventDefault()
              props.submit(game.type, props.isFetching)
            }}
            className={styles.button}
          >
            {props.isFetching ? 'Cancel' : 'Get results!'}
          </button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    isFetching: state.games.isFetching,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submit: (gameType, isFetching) => {
      if (isFetching) {
        dispatch(cancelFetchGamesButtonPressed())
        return
      }
      dispatch(fetchGamesButtonPressed(gameType))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form)
