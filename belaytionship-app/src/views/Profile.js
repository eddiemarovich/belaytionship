import React, { Component, } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { ProfileNavbar } from '../components/navbars'
import { Background } from '../components/'
import { PeaceOut } from '../components/buttons'
import firebase from 'firebase'


class Profile extends Component {
  constructor(props){
    super(props)
    this.state= {
      user: {},
      matches: []
    }
  }

  componentWillMount(){
    this.setState({user: this.props.signedInUser, matches: this.props.matches}, () => {
      // console.log(this.state)
    })
  }


  render () {
    const userFbId = this.state.user.id
    const userFbPic = `https://graph.facebook.com/${userFbId}/picture?height=500`

    return (
      <View style= {styles.viewContainer}>
        <Background />
        <Text style= {styles.profileTitleStyle}>Your Profile</Text>
        <View style = {styles.profileContainer}>
          <Text style = {styles.nameStyle}>{this.state.user.first_name}</Text>
          <Image source={{uri: userFbPic}} style= {styles.pictureStyle} />
          <View>

          </View>
        </View>
      </View>
    )
  }
}

const styles = {
  viewContainer: {
    flex: 1,
    backgroundColor: '#41B6FF',
    alignItems: 'center',
    height: 120,
    backgroundColor:'#3087BD',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  profileTitleStyle: {
    color: 'white',
    fontSize: 56,
    fontFamily: 'Pacifico-Regular',
    transform: [{ rotate: '355 deg'}],
    marginTop: 10,
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: .5
  },
  pictureStyle: {
    borderRadius: 60,
    height: 150,
    width: 150,
    borderWidth: 2,
    borderColor: 'white'
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 40
  },
  nameStyle: {
    color: 'white',
    fontSize: 36,
    fontFamily: 'Comfortaa-Regular',
    fontWeight: 'bold',
    marginBottom: 10,
  }
}

export { Profile }
