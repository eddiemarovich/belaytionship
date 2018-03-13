import React, {Component} from 'react'
import {View, Text} from 'react-native'
import * as firebase from 'firebase'

import { Card } from '../components/'

class Home extends Component {

  state = {
    profileIndex: 0,
    profiles: [],
  }

  componentWillMount() {
    firebase.database().ref().child('users').once('value', (snap) => {
      let profiles = []
      snap.forEach((profile) => {
        const {name, bio, birthday, id} = profile.val()
        profiles.push({name, bio, birthday, id})
      })
      this.setState({profiles})
    })
  }

  nextCard = () => {
    this.setState({profileIndex: this.state.profileIndex + 1})
  }

  render() {
    const {profileIndex} = this.state
    return (
      <View style={{flex:1}}>
        {this.state.profiles.slice(profileIndex, profileIndex + 3).reverse().map((profile) => {
          return (
            <View>
              {/* <Card /> */}
              <Card
                key={profile.id}
                profile={profile}
                onSwipeOff={this.nextCard}
              />
            </View>
          )
        })}
      </View>
    )
  }
}
export  { Home }
