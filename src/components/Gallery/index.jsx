import React, { Component} from 'react'
import PropTypes from 'prop-types'

import styles from './gallery.css'



class Gallery extends Component {
  _renderImages () {
    const { images } = this.props
    return images.map(img => (
      <figure className={styles.foto} key={img}>
        <img src={img} />
      </figure>
    ))
  }

  render () {
    return (
      <div className={styles.root}>
        <figure className={styles.images}>
          {this._renderImages()}
        </figure>
      </div>

    )
  }
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired
}


export default Gallery
