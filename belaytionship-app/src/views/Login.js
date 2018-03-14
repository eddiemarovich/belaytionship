import Exponent from 'expo'
import React, {Component} from 'react'
import {Font} from 'expo'
import { View, StyleSheet, Text } from 'react-native'
import { Actions }  from 'react-native-router-flux'
import { FacebookButton, Background } from '../components'


class Login extends Component {
  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({'Pacifico-Regular': require('../../assets/fonts/Pacifico-Regular.ttf')})
    this.setState({fontLoaded: true})
  }

  login = async() => {
    const ADD_ID = '553125241723031'
    const options = {
      permissions: ['public_prfile']
    }
    const { type, token } = await Exponent.Facebook.logInWithPermissionsAsync(ADD_ID, options)
    if (type === 'success') {
      const response = fetch(`https://graph.facebook.com/me?access_token=${token}`)
      console.log(await response.json())
    }
  }

  render() {
    return(
      <View  style={styles.containerStyle}>
        <Background/>
        {this.state.fontLoaded ? (<Text style={styles.titleStyle}>Belaytionship</Text>) : null}
        <FacebookButton />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagestyles: {
    position: 'absolute'
  },
  titleStyle: {
    color: 'white',
    fontSize: 56,
    fontFamily: 'Pacifico-Regular',
    transform: [{ rotate: '355 deg'}],
    marginBottom: 40

  }
})

export { Login }
