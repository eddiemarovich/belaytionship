import Expo from 'expo'
import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Profile, Matches } from './'
import { Background, Scroll, Card, } from '../components'
import { CardStackNavbar } from '../components/navbars'
import * as firebase from 'firebase'

const likedUsers = []
const matchedUsers = []

class Home extends Component {


  state = {
    profileIndex: 0,
    profiles: [],
    user: this.props.user,
    likedUsers: [],
    matchedUser: null
  }


  componentWillMount() {
    const {uid} = this.state.user
    firebase.database().ref().child('users').once('value', (snap) => {
      let profiles = []
      snap.forEach((profile) => {
        const {name, bio, birthday, id} = profile.val()
        profiles.push({name, bio, birthday, id})
      })
      this.setState({profiles})
    })
    console.log(this.state.profiles)
  }

  getUser = () => {
    return firebase.database().ref('users').child(uid).once('value')
  }

  relate = (userUid, profileUid, status) => {
    let relationUpdate = {}
    relationUpdate[`${userUid}/liked/${profileUid}`] = status
    relationUpdate[`${profileUid}/likedBack/${userUid}`] = status
    firebase.database().ref('relationships').update(relationUpdate)

  }

  getName = async (id) => {
    let response = await fetch (`https://graph.facebook.com/${id}?&access_token=553125241723031|cekDbkq9I_zrD1unFrgLYiV8A0I`)
    let data = await response.json()
    let name = data.name.toString().split(' ')
    this.setState({matchedUser: name[0]})
    console.log('matchedUser State: ', this.state.matchedUser);
    return name
  }


  nextCard = (swipedRight, profileUid) => {

    const userUid = this.props.user.uid
    this.setState({profileIndex: this.state.profileIndex + 1})
    if (swipedRight){
      this.relate(userUid, profileUid, true)
      likedUsers.push(profileUid)
      this.setState({likedUsers})
      this.getName(profileUid)

    }else{
      this.relate(userUid, profileUid, false)
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
        <Profile  signOut= {this.logout} signedInUser= {this.props.user}/>,
        <Matches matchedUser= {this.state.matchedUser} profiles= {this.state.profiles} likedUsers= {this.state.likedUsers}/>,
        this.cardStack()
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
