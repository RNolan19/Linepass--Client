import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'

import Bar from '../Bars/Bar'
import CreateBar from '../Bars/CreateBar'
import Homepage from '../Homepage'
import NewBar from '../Bars/NewBar'
import UpdateBar from '../Bars/UpdateBar'
import Footer from '../Footer'
import Brady from '../../img/brady.jpeg'
import About from '../About'
import ReviewDetails from '../ReviewDetails'
import ReviewsContainer from '../ReviewsContainer'
import Confirmation from '../Confirmation'
import HeaderFixed from '../Header/HeaderFixed'

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

          <Route exact path="/" render={() => (
            <div>
              <Homepage />
            </div>
          )} />

          <Route exact path='/bars' user={user} render={(props) => (
            <div>
              <Header {...props} user={user} />
              <Bar {...props} alert={this.alert} user={user} barName='Lincoln Tavern' city='South Boston' address='425 West Broadway' link='Lincoln' price='30'/>
              <ReviewsContainer>
                <ReviewDetails avatar={Brady} name="Thomas" comment="&#34;LinePass has been great for my business.  I never realized how much money I was missing out on&#34;"/>
                <ReviewDetails avatar={Brady} name="Edward" comment="&#34;The worst part of the night is either waiting in line or Finding a bar without one.  I love LinePass&#34;"/>
                <ReviewDetails avatar={Brady} name="Brady" comment="&#34;I&#39;m never going back to waiting in line.  For the price, LinePass is a no brainer, in my opinion.&#34;"/>
              </ReviewsContainer>
              <Footer />

            </div>
          )} />

          < Route exact path="/bars/:id" user={user} render={(props) => (
            <Fragment>
              <HeaderFixed/>
              <NewBar {...props} alert={this.alert} user={user} />
              <Footer />
            </Fragment>
          )} />

          < Route exact path="/bars/:id/update" user={user} render={(props) => (
            <Fragment>
              <HeaderFixed/>
              <UpdateBar {...props} alert={this.alert} user={user} />
              <Footer />
            </Fragment>
          )} />

          <Route exact path='/about' user={user} render={() => (
            <div>
              <HeaderFixed />
              <About />
              <Footer />
            </div>
          )} />

          <Route exact path='/confirmation' user={user} render={(props) => (
            <div>
              <HeaderFixed />
              <Confirmation {...props} user={user} />
            </div>
          )} />

          <Route exact path='/add-my-bar' user={user} render={() => (
            <div>
              <HeaderFixed />
              <CreateBar alert={this.alert} user={user} addBars={this.addBars} loadSampleBars={this.loadSampleBars} state={this.state.bars}/>
              <Footer />
            </div>
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
