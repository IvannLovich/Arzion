import React, { Component } from 'react'

import styles from './form.css'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputNameValue: '',
      inputPriceValue: ''
    }

    this._handleChange = this._handleChange.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleChange (e) {
    const { name, value } = e.target
    this.setState({ [`${name}Value`]: value })
  }

  _handleSubmit (e) {
    e.preventDefault()
    const { inputNameValue, inputPriceValue } = this.state
    this.props.onSearch({ inputNameValue, inputPriceValue })
  }

  render () {
    return (
      <div className={styles.formContent}>
        <form className={styles.form} onSubmit={this._handleSubmit}>
          <input
            className={styles.input1}
            name='inputName'
            onChange={this._handleChange}
            placeholder='Name of the hotel...'
            type='text'
            value={this.state.inputNameValue}
          />
          <br />
          <input
            className={styles.input2}
            name='inputPrice'
            onChange={this._handleChange}
            placeholder='Price of the hotel...'
            type='text'
            value={this.state.inputPriceValue}
          />
          <div className={styles.button}>
            <button className='btn btn-primary'>Search!</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form
