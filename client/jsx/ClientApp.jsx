import React from 'react'
import ReactDOM from 'react-dom'
import Landing from './Landing'
import Search from './Search'
import Layout from './Layout'
import Details from './Details'
import Header from './Header'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { shows } from '../public/data'

class App extends React.Component {

  constructor (props) {
    super(props)

    this.assignShow = this.assignShow.bind(this)
  }

  assignShow (nextState, replace) {
    const show = shows[nextState.params.id]
    if (!show) {
      return replace('/')
    }
    console.log("nextState.params : ",nextState.params)
    console.log("show : ", show)
    Object.assign(nextState.params, show)
    return nextState
  }

  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing} />
          <Route path='/search' component={Search} shows={shows} />
          <Route path='/details/:id' component={Details} onEnter={this.assignShow} />
        </Route>
      </Router>
    )
  }
  
}

ReactDOM.render(<App />, document.getElementById('app'))