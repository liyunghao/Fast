
import './style.css';

import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
// import Home from './Pages/Home'
import Ride from './Pages/Ride'
import Chatting from './Pages/Chatting'
import Setting from './Pages/Setting'
import NavBar from './Components/NavBar'


const Notfound = () => (<div> ERROR 404 </div>)
const Home = () => (<div> Home Page </div>)
class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <BrowserRouter>
          <div>
            <Route path = '/Ride' component = {NavBar}/>
            <Route path = '/Chatting' component = {NavBar}/>
            <Route path = '/Setting' component = {NavBar}/>
            <Switch>
              <Route exact path = '/' component = { Home }/>
              <Route path = '/Ride' component = { Ride }/>
              {/* <Route path = '/Chatting' component = { Chatting }/> */}
              {/* <Route path = '/Setting' component = { Setting }/>  */}
              <Route component = { Notfound }/>
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    )
  }
}

export default App;
