import React, { Component } from 'react'
import styles from './style.css'


class StarSVG extends Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <svg height='20' width='22'>
        <polygon
          className={styles.polygon}
          points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78'
        />
      </svg>
    )
  }
}



export default StarSVG
