import {Font} from 'expo'
import React, {Component} from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

class FacebookButton extends Component {
  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({'Comfortaa-Regular': require('../../assets/fonts/Comfortaa-Regular.ttf')})
    this.setState({fontLoaded: true})
  }


  render() {
    return (
      <TouchableOpacity style={styles.buttonStyle}>
        <View style={styles.buttonContainer}>
          <FontAwesome name= {'facebook-f'} size={20} color= {'white'}/>
          {this.state.fontLoaded ? (<Text style={styles.textStyle}>Login with Facebook</Text>) : null}
        </View>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  buttonStyle: {
    width: 260,
    height: 60,
    backgroundColor: '#3b5998',
    borderRadius: 40,


  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
    fontFamily: 'Comfortaa-Regular'
  }
})

export  { FacebookButton }