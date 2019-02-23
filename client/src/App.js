import React, { Component } from 'react'
import styles from './App.css'
import axios from 'axios'

import GamesPage from './pages/GamesPage.js'

class App extends Component {
  async componentDidMount () {
    const result = await axios.get('/api/test')
    console.log(result)
  }
  render() {
    return (
      <div className={styles.app}>
        <GamesPage />
      </div>
    );
  }
}

export default App
