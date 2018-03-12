import Exponent from 'expo'
import React, {Component} from 'react'
import {  StyleSheet, View, Image, Text, PanResponder, Animated } from 'react-native'
import Card from './Card'
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA8S2JPfKIGhxV0iQBQdZcTcovOdiyRZK0",
  databaseURL: "https://belaytionship.firebaseio.com",
}

firebase.initializeApp(firebaseConfig)

class App extends Component {

  state = {
    profileIndex: 0,
    profiles: [],
  }

  componentWillMount() {
    firebase.database().ref().child('users').once('value', (data) => {
      let profiles = []
      data.forEach((prof) => {
        const { name, bio, id} = prof.val()
        profiles.push({name, bio, id})
      })
      this.setState({profiles})
    })
  }

  nextCard = () => {
    this.setState({profileIndex: this.state.profileIndex + 1})
  }

  render() {
    const { profileIndex } = this.state
    return (
      <View style= {{flex: 1}}>
        {this.state.profiles.slice(profileIndex, profileIndex + 3).reverse().map((e, i) => {
          return (
            <Card
              key= {e.id}
              profile= {e}
              onSwipeOff= {this.nextCard}
            />
          )
        })}
      </View>
    )
  }
}



export default App
