import React, { Component } from 'react'
import Navbar from './components/Navbar'
import User from './components/User'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <User />
      </div>
    )
  }
}