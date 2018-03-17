import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Rating from '../Rating'

import styles from './hotel.css'

class Hotel extends Component {

  render () {
    const { images, name, priceMax, priceMin, starRating, separation } = this.props
    let hotelLink = `/hotel/${this.props.id}`

    
    const separationClassName = separation === 'vertical'
      ? styles.verticalSeparation
      : styles.horizontalSeparation


    return (
      <Link to={hotelLink}  className={`${styles.hotel} ${separationClassName}`}>
        <figure className={styles.hotelImage}>
          <img src={images} />
        </figure>
        <div className={styles.hotelInfo}>
          <h2 className={styles.name}>{name}</h2>
          <div className={styles.prices}>
            <span><Rating stars={starRating}/></span>
            <span>Min Price: ${priceMin}</span>
            <span>Max Price: ${priceMax}</span>
          </div>
        </div>
      </Link>
    )
  }
}

Hotel.defaultProps = {
  separation: 'vertical'
}

Hotel.propTypes = {
  separation: PropTypes.oneOf(['vertical', 'horizontal'])
}



export default Hotel
