import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Bar from '../Bar'
import AddBar from '../AddBar'
import Homepage from '../Homepage'
import Lincoln from './lincoln.jpg'
import Broadway from './the broadway.jpeg'
import Loco from './loco.jpg'
import Stats from './stats3.jpg'
import Capo from './Capo.jpg'
import Legal from './legal.jpg'
//
// <Bar barImage={Lincoln} barName='Lincoln Tavern' city='South Boston' address='425 West Broadway'/>
// <Bar barImage={Broadway} barName='The Broadway' city='South Boston' address='726 East Broadway'/>
// <Bar barImage={Loco} barName='Loco Taqueria' city='South Boston' address='412 West Broadway'/>
// <hr className='hr-large'></hr>
// <Bar barImage={Stats} barName='STATS Bar & Grille' city='South Boston' address='77 Dorchester Street'/>
// <Bar barImage={Capo} barName='Capo Restaurant' city='South Boston' address='443 West Broadway'/>
// <Bar barImage={Legal} barName='Legal Harborside' city='Seaport' address='270 Northern Ave'/>

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <Fragment>
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <main className="main">
          <Route exact path='/' render={() => (
            <Homepage />
          )} />
          <Route exact path='/bars' render={() => (
            <div>
              <Header user={user} />
              <Bar barImage={Lincoln} barName='Lincoln Tavern' city='South Boston' address='425 West Broadway'/>
              <Bar barImage={Broadway} barName='The Broadway' city='South Boston' address='726 East Broadway'/>
              <Bar barImage={Loco} barName='Loco Taqueria' city='South Boston' address='412 West Broadway'/>
              <hr className='hr-large'></hr>
              <Bar barImage={Stats} barName='STATS Bar & Grille' city='South Boston' address='77 Dorchester Street'/>
              <Bar barImage={Capo} barName='Capo Restaurant' city='South Boston' address='443 West Broadway'/>
              <Bar barImage={Legal} barName='Legal Harborside' city='Seaport' address='270 Northern Ave'/>
              <hr className='hr-large'></hr>
            </div>
          )} />

          <Route exact path='/add-my-bar' render={() => (
            <AddBar />
          )} />

          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <div>
              <SignIn alert={this.alert} setUser={this.setUser} />
            </div>
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
