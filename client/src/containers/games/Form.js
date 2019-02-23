import React from 'react'
import styles from './Form.css'

export default () => {
    return (
        <div className={styles.wrapper}>
            <label>Please enter the name of the game:</label>
            <input type="text"></input>
            <button onClick={onButtonClick}>Get results!</button>
        </div>
    )
}

const onButtonClick = () => {
    console.log('Will fetch!')
}
