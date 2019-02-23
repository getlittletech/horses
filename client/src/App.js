import React, { Component } from 'react'
import styles from './App.css'
import { Provider } from 'react-redux'
import store from './state/store'

import GamesPage from './pages/GamesPage'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={styles.app}>
          <GamesPage />
        </div>
      </Provider>
    )
  }
}

export default App
