import React from 'react'

import PageHeader from '../components/headers/PageHeader'
import GameInfo from '../containers/games/GameInfo'

import styles from './GamesPage.css'

export default () => {
  return (
    <section className={styles.wrapper}>
      <PageHeader>Welcome!</PageHeader>
      <GameInfo />
    </section>
  )
}
