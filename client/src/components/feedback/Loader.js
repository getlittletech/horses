import React from 'react'
import horse from '../../images/horse.gif'
import styles from './Loader.css'

export default () => (
  <div className={styles.wrapper}>
    <img src={horse} alt='logo' width='50px' height='50px' />
  </div>
)
