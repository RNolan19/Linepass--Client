import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import faker from 'faker'

import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'

import Bar from '../Bars/Bar'
import CreateBar from '../Bars/CreateBar'
import Homepage from '../Homepage'
// import ProductPage from '../Bars/ProductPage'
import NewBar from '../Bars/NewBar'
import UpdateBar from '../Bars/UpdateBar'
import Footer from '../Footer'
// import Info from '../Info'
import About from '../About'
import ReviewDetails from '../ReviewDetails'
import ReviewsContainer from '../ReviewsContainer'
import Confirmation from '../Confirmation'
import HeaderFixed from '../Header/HeaderFixed'
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

  addBars = bar => {
    // 1- take a copy of the existing state. Never want to directly mutate state
    const newBars = { ...this.state.bars }
    // 2- add our new Bar to the Bars variable
    // use timestamp to give each Bar a unique index ID
    newBars[bar.name] = bar
    // 3- Set the new bars object to state w/ built in setState method
    this.setState({
      // pass it the piece you want to update, aka the bars state, + overwrite it
      // with the new object.
      bars: newBars
    })
  }

  loadSampleBars = () => {
    // this.setState({
    //   bars: sampleFishes
    // })
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
                <ReviewDetails avatar={faker.image.avatar()} name="Brady" comment="&#34;LinePass has been great for my business.  I never realized how much money I was missing out on&#34;"/>
                <ReviewDetails avatar={faker.image.avatar()} name="Corey" comment="&#34;The worst part of the night is either waiting in line or Finding a bar without one.  I love LinePass&#34;"/>
                <ReviewDetails avatar={faker.image.avatar()} name="Alex" comment="&#34;I&#39;m never going back to waiting in line.  For the price, LinePass is a no brainer, in my opinion.&#34;"/>
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
              <ReviewDetails avatar={faker.image.avatar()} />
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
