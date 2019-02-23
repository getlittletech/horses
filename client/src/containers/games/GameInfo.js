import React from 'react'
import styles from './GameInfo.css'
import Statistics from './Statistics'
import Form from './Form'

export default () => {
    return (
        <section className={styles.wrapper}>
            <Form />
            <Statistics />
        </section>
    )
}
