
import './style.css';

import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
// import Home from './Pages/Home'
import Ride from './Pages/Ride'
import Chatting from './Pages/Chatting'
import Setting from './Pages/Setting'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'


const Notfound = () => (<div> ERROR 404 </div>)
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null
    }

    this.updateToken = this.updateToken.bind(this)
  }


  updateToken(t){
    this.setState({token: t.token})
    // console.log(t)
    // if (t.status === "success") return() => <Redirect to='/Ride' />
    // else return() => <Redirect to='/' />
  }


  render() {
    return (
      <div className = 'App'>
        <BrowserRouter>
          <div className = 'Route'>
            <Route path = '/Ride' component = {NavBar}/>
            <Route path = '/Chatting' component = {NavBar}/>
            <Route path = '/Setting' component = {NavBar}/>

            <Switch>
              <Route exact path = '/' render = { this.state.token ? () => <Redirect to='/Ride' /> : ()=>{return <Home updateToken = {this.updateToken}/> }}/>
              <Route path = '/Ride' component = { Ride }/>
              <Route path = '/Chatting' component = { Chatting }/>
              <Route path = '/Setting' component = { Setting }/>
              <Route component = { Notfound }/>
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    )
  }
}

export default App;
