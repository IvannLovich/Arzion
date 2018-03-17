import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Details from './pages/Details'
import Header from './components/Header'
import Main from './pages/Main'

import 'normalize.css'
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css'


class App extends Component {

  render () {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/hotel/:id' component={Details} />


          </Switch>
        </Fragment>
      </Router>
    )
  }
}


export default App
