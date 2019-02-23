import React, { useState } from 'react'
import { connect } from 'react-redux'
import styles from './Form.css'
import { fetchGamesButtonPressed, cancelFetchGamesButtonPressed } from '../../state/actions/games'

export const Form = props => {
  const [text, setText] = useState('')
  return (
    <div className={styles.wrapper}>
      <label>Please enter the name of the game:</label>
      <input type='text' onChange={value => setText(value)} />
      <button onClick={() => props.onClick(text, props.isFetching)}>
        {props.isFetching ? 'Cancel' : 'Get results!'}
      </button>
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
    onClick: (text, isFetching) => {
      if (isFetching) {
        dispatch(cancelFetchGamesButtonPressed())
        return
      }
      dispatch(fetchGamesButtonPressed(text))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form)
