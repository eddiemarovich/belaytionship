import React, { Component, } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { ProfileNavbar } from '../components/navbars'
import { Background } from '../components/'
import firebase from 'firebase'

let name
let email
const matches = []

class Matches extends Component {
  constructor(props){
    super(props)

  }

  componentDidMount(){
    this.getEmail('100000210717763')
  }
  getEmail = async (id) => {
    let response = await fetch (`https://graph.facebook.com/${id}?fields=email&access_token=553125241723031|cekDbkq9I_zrD1unFrgLYiV8A0I`)
    let data = await response.json()
  }







  displayMatches = () => {

    return (

      <View >
        {this.props.matches.map(e => {

          let id = e.toString()
          return (
            <View style= {styles.userInfo} key= {e}>
            <Image
              style= {styles.pictureStyle}
              source= {{uri: `https://graph.facebook.com/${id}/picture?height=500`}}
               />
              <View style= {{flexDirection: 'column'}}>
                <Text style= {styles.nameStyle}>{this.props.matchedUsers[this.props.matchedUsers.length - 1]}</Text>
                <Text style= {styles.emailStyle}>Email</Text>
              </View>
            </View>
          )
        })}
      </View>
    )
  }

  render () {
    console.log(this.props.matchedUsers)
    return (
      <View style= {styles.profileContainer}>
        <Background />
        <Text style= {styles.matchesStyle}>Matches</Text>
        <View style= {styles.matchesList}>
          <View style= {styles.userInfo}>
            <Image style= {styles.pictureStyle} source= {{uri: `https://graph.facebook.com/1218472169/picture?height=500`}} />
            <View>
              <Text style= {styles.nameStyle}>Brennen</Text>
              <Text style= {styles.emailStyle}>brennenbull@aol.com</Text>
            </View>
          </View>
          <View style= {styles.userInfo}>
            <Image style= {styles.pictureStyle} source= {{uri: `https://graph.facebook.com/1081980628/picture?height=500`}} />
            <View>
              <Text style= {styles.nameStyle}>Cat</Text>
              <Text style= {styles.emailStyle}>catdog@hotmail.com</Text>
            </View>
          </View>
          <View style= {styles.userInfo}>
            <Image style= {styles.pictureStyle} source= {{uri: `https://graph.facebook.com/100000210717763/picture?height=500`}} />
            <View>
              <Text style= {styles.nameStyle}>Zach</Text>
              <Text style= {styles.emailStyle}>jacknadiak@aol.com</Text>
            </View>
          </View>
          {this.displayMatches()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: '#41B6FF',
    alignItems: 'center',
    height: 120,
    backgroundColor:'#3087BD',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  matchesStyle: {
    color: 'white',
    fontSize: 56,
    fontFamily: 'Pacifico-Regular',
    transform: [{ rotate: '355 deg'}],
    marginTop: 20,
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: .5
  },
  pictureStyle: {
    borderRadius: 20,
    height: 75,
    width: 75,
    borderWidth: 2,
    borderColor: 'white'
  },
  nameStyle: {
    color: 'white',
    fontFamily: 'Comfortaa-Regular',
    fontSize: 32
  },
  userInfo: {
    flexDirection: 'row',
    marginTop: 6,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  emailStyle: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Comfortaa-Regular',
  },
  matchesList: {
    flexDirection: 'column'
  }
})

export { Matches }
