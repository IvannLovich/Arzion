import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Hotel from '../Hotel'

import styles from './styles.css'

class HotelList extends Component {
  render () {
    const { centered, separationHotels } = this.props
    const className = centered ? styles.centered : styles.default

    return (
      <div className={className}>
        {this.props.list.map(hotel => <Hotel key={hotel.id} {...hotel} separation={separationHotels}/>)}
      </div>
    )
  }
}


HotelList.defaultProps = {
  separationHotels: 'vertical'
}

HotelList.propTypes = {
  centered: PropTypes.bool,
  list: PropTypes.array.isRequired,
  separationHotels: PropTypes.string
}



export default HotelList
