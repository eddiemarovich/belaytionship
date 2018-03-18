import Expo from 'expo'
import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Profile, Matches } from './'
import { Background, Scroll, Card, } from '../components'
import { CardStackNavbar } from '../components/navbars'
import * as firebase from 'firebase'


class Home extends Component {


  state = {
    profileIndex: 0,
    profiles: [],
    // user: this.props.Actions.state.params.user
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
    if (swipedRight){

    }else{
      
    }
  }

  cardStack = () => {
    const {profileIndex} = this.state

    return (
      <View>
        <Background />
          <Text style= {{
            color: 'white',
            fontSize: 56,
            fontFamily: 'Pacifico-Regular',
            transform: [{ rotate: '355 deg'}],
            marginTop: 20,
            textShadowColor: 'black',
            textShadowOffset: {width: 2, height: 2},
            textShadowRadius: .5}}>Other Climbers</Text>
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
        <Profile signOut= {this.logout} signedInUser= {this.props.user}/>,
        this.cardStack(),

        <Matches />

      ]}
    />
    )
  }
}
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#41B6FF',
    alignItems: 'center',
  },
  titleStyle: {
    color: 'white',
    fontSize: 56,
    fontFamily: 'Pacifico-Regular',
    transform: [{ rotate: '355 deg'}],
    marginTop: 20,
  }
})


export  { Home }
