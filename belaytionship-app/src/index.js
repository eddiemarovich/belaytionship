import React, {Component, } from 'react'
import { View, } from 'react-native'
import * as firebase from 'firebase'
import  { Home, Login } from './views/index.js'


const firebaseConfig = {
  apiKey: "AIzaSyA8S2JPfKIGhxV0iQBQdZcTcovOdiyRZK0",
  databaseURL: "https://belaytionship.firebaseio.com",
}

firebase.initializeApp(firebaseConfig)

class App extends Component {
  render () {
    return (
        <Home />
    )
  }
}


export default App
