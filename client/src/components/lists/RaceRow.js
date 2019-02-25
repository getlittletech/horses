import React from 'react'
import StartsRow from './StartsRow'
import styles from './RaceRow.css'

export default ({ race: { name, starts, scheduledStartTime, number } }) => {
  const startTimeFormatted = formatTime(scheduledStartTime)

  return (
    <tr className={styles.item}>
      <td className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th colSpan='4' className={styles.head}>
                {number}. {name} {name && ','} {startTimeFormatted}
              </th>
            </tr>
            <tr className={styles.labels}>
              <th className={styles.labels}>#</th>
              <th className={styles.labels}>Horse</th>
              <th className={styles.labels} colspan='2'>
                Driver
              </th>
            </tr>
          </thead>
          <tbody>{starts?.map(start => <StartsRow start={start} key={start?.horse?.id} />)}</tbody>
        </table>
      </td>
    </tr>
  )
}

const formatTime = timeString => {
  const date = new Date(timeString)
  const h = addZero(date.getHours())
  const m = addZero(date.getMinutes())
  return `${h}:${m}`
}

const addZero = i => {
  if (i < 10) {
    i = `0${i}`
  }
  return i
}
