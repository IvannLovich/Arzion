import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Rating from '../Rating'
import Gallery from '../Gallery'
import Recommendations from '../Recommendations'

import styles from './profile.css'



class Profile extends Component{

  render(){
    const { id, name, description, stars, images, gallery, priceMin, priceMax, average, availability, date, plans } = this.props

    return (
      <div className={styles.root}>
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.body}>
          <div className={styles.container}>
            <figure>
              <img src={images} />
            </figure>
            <div className={styles.info}>
              <span>Description: "{description}"</span>
              <span>Availability: {availability}</span>
              <span>Min price: ${priceMin}</span>
              <span>Max price: ${priceMax}</span>
              <span>Average: ${average}</span>
              <span>Stars: <Rating stars={stars}/></span>
              <span>Date: {Intl.DateTimeFormat('en-US').format(date)}</span>
              <span>Plans: {plans[0].name}</span>
            </div>
          </div>
          <Gallery images={Object.values(gallery[0])} />
        </div>
        <Recommendations id={id} />
        <div className={styles.backIcon}>
          <Link to="/">{'Back to Home'}</Link>
        </div>
      </div>
    )

  }
}

Profile.propTypes = {
  description: PropTypes.string.isRequired,
  availability: PropTypes.bool.isRequired,
  plans: PropTypes.array.isRequired,

}



export default Profile
