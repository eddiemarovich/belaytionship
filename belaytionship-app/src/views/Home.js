import Expo from 'expo'
import React, {Component} from 'react'
import {View, Text} from 'react-native'
import { Profile, } from './'
import { Background, Scroll, Card, } from '../components'
import * as firebase from 'firebase'


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

  cardStack = () => {
    const {profileIndex} = this.state

    return (
      <View style={{flex:1}}>
        {this.state.profiles.slice(profileIndex, profileIndex + 3).reverse().map((e) => {
          return (
              <Card
                key={e.id}
                profile={e}
                onSwipeOff={this.nextCard}
              />
          )
        })}
      </View>
    )
  }


  render() {
    return (
      <Scroll
      screens= {[
        <Profile />,
        this.cardStack(),

      ]}
    />
    )
  }
}
export  { Home }
