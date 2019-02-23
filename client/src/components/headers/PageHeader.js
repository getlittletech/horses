import React from 'react'
import styles from './PageHeader.css'

export default ({ children }) => {
  return (
    <header className={styles.header}>
      <h1>{children}</h1>
    </header>
  )
}
