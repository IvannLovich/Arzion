import React, { Component, Fragment } from 'react'
import Form from '../../components/Form'
import HotelList from '../../components/HotelList'

import styles from './main.css'

import data from '../../data/hotels.json'


class Main extends Component {
  constructor() {
    super()
    this.state = {
      list: []
    }

    this._handleSearch = this._handleSearch.bind(this)
  }

  _handleSearch ({ inputNameValue, inputPriceValue }) {
    const lowerCased = inputNameValue.toLowerCase();
    let list = data.filter(hotel => hotel.name.toLowerCase().includes(lowerCased ))



    if (inputPriceValue) {
      list = list.filter(hotel => {
        const { priceMin, priceMax } = hotel
        const price = +inputPriceValue
        return priceMin <= price && price <= priceMax
      })
    }

    this.setState({ list })

    /*
    If data would be from an API:

    fetch(`http://api.hoteling.com?name=${inputNameValue}&price=${inputPriceValue}`)
      .then(res => res.json())
      .then(hotels => {
        this.setState({ list: hotels })
      })
    */


  }

  render () {
    return (
      <Fragment>
        <div className={styles.container}>
          <Form onSearch={this._handleSearch} />
          <div className={styles.hotelList}>
            <HotelList list={this.state.list} />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Main
