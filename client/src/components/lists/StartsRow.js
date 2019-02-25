import React, { PureComponent } from 'react'
import styles from './StartsRow.css'

export default class StartsRow extends PureComponent {
  state = {
    expanded: false,
  }
  render() {
    const {
      start: { number, driver, horse },
    } = this.props
    const { expanded } = this.state
    return [
      <tr
        className={styles.row}
        onClick={() => {
          this.toggleExpandable()
        }}
        key={horse.name}
      >
        <td className={styles.item}>{number}.</td>
        <td className={[styles.item, styles.horse].join(' ')}>{horse.name}</td>
        <td className={styles.item}>
          {driver.firstName} {driver.lastName}
        </td>
        <td>
          <i className={styles.arrowDown} />
        </td>
      </tr>,
      <tr className={expanded ? styles.expanded : styles.collapsed} key={horse.name + horse.trainer.firstName}>
        <td> </td>
        <td colSpan='3'>
          <div className={styles.additionalHeader}>Additional information:</div>
          <div>
            Trainer: {horse.trainer.firstName} {horse.trainer.lastName}
          </div>
          <div>Father: {horse.pedigree.father.name}</div>
        </td>
      </tr>,
    ]
  }

  toggleExpandable = () => {
    this.setState({ expanded: !this.state.expanded })
  }
}
