import React, { Component } from 'react'
import PropTypes from 'prop-types'

import HotelList from '../HotelList';
import styles from './recommendations.css'
import data from '../../data/hotels.json'

 class Recommendations extends Component {

  _getRecommendations () {
    const { id, limit } = this.props
    return data
      .filter(hotel => hotel.id !== id)
      .slice(0, limit)
  }

  render () {
    return (
      <div>
        <h2 className={styles.title}>Other recommendations...</h2>
        <HotelList
          centered
          list={this._getRecommendations()}
          separationHotels='horizontal'
        />
      </div>
    )
  }
}




Recommendations.defaultProps = {
  limit: 5
}

Recommendations.propTypes = {
  id: PropTypes.number.isRequired,
  limit: PropTypes.number
}


export default Recommendations
