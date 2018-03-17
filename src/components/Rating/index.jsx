import React, { Component } from 'react'
import PropTypes from 'prop-types'

import StarSVG from '../StarSVG'


class Rating extends Component {
  render () {
    const { stars } = this.props
    let iconsArray = []

    for (let i = 0; i < stars; i++) {
      iconsArray.push(<StarSVG key={i} />)
    }
    
    return iconsArray
  }
}

Rating.propTypes = {
  stars: PropTypes.number.isRequired
}

export default Rating
