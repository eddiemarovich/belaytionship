import Expo from 'expo'
import firebase from 'firebase'
import React, {Component} from 'react'
import { Font } from 'expo'
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native'
import { Actions }  from 'react-native-router-flux'
import { FacebookButton, Background } from '../components'


class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      fontLoaded: false,
      showSpinner: true,
      user: {}
    }
    this.goHome = this.goHome.bind(this)
  }



  async componentDidMount() {
    // await firebase.auth().signOut()
    let signedInUser = {}
    await firebase.auth().onAuthStateChanged(auth => {
      if (auth) {
        this.firebaseRef = firebase.database().ref('users')
        this.firebaseRef.child(auth.uid).on('value', snap => {
          const user = snap.val()
          signedInUser = user
          if (user != null){
            this.firebaseRef.child(auth.uid).off('value')
            this.goHome(signedInUser)
          }
        })
      }
    })
    await Expo.Font.loadAsync({'Pacifico-Regular': require('../../assets/fonts/Pacifico-Regular.ttf')})
    this.setState({fontLoaded: true})
  }


  goHome(user){
    const resetAction = Actions.home({user: user})
    this.props.resetAction
  }



  authenticate = (token) => {
    const provider = firebase.auth.FacebookAuthProvider
    const credential = provider.credential(token)
    return firebase.auth().signInWithCredential(credential)
  }

  createUser = (uid, userData) => {
    firebase.database().ref('users').child(uid).update(uid, ...userData)
  }

  login = async() => {
    const ADD_ID = '553125241723031'
    const options = {
      permissions: ['public_profile', 'email', ]
    }
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(ADD_ID, options)
    if (type === 'success') {
      const fields = ['id', 'first_name', 'last_name', 'bio', 'picture', 'bio' ]
      const response = await fetch(`https://graph.facebook.com/me?fields=${fields.toString()}&access_token=${token}`)
      const userData = await response.json()
      const { uid } = await this.authenticate(token)
      this.createUser(uid, userData)
    }
  }


  render() {
    return(
      <View  style={styles.containerStyle}>
        <Background/>
        {this.state.fontLoaded ? (<Text style={styles.titleStyle}>Belaytionship</Text>) : null}
        <FacebookButton login= {this.login}/>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
  },
  imagestyles: {
    position: 'absolute'
  },
  titleStyle: {
    color: 'white',
    fontSize: 56,
    fontFamily: 'Pacifico-Regular',
    transform: [{ rotate: '355 deg'}],
    marginTop: 10,
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: .5
  }
})

export { Login }
