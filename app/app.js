import React, { Component } from 'react'
import {TwitterContainer} from './components'

export default class App extends Component{
  constructor () {
    super()
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <TwitterContainer />
      </div>
    )
  }
}