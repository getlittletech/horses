import React from 'react'
import RaceRow from './RaceRow'
import styles from './RaceList.css'

export default ({ title, races }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th className={styles.head} colSpan='4'>
          {title}
        </th>
      </tr>
    </thead>
    <tbody>
      {races.map(race => (
        <RaceRow race={race} key={race.id} />
      ))}
    </tbody>
  </table>
)
