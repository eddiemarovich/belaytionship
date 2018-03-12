import React, {Component} from 'react'
import {  StyleSheet, View, Image, Text, PanResponder, Animated } from 'react-native'
import Card from './Card'

class App extends Component {

  render() {
    return (
      <View style= {{flex: 1}}>
        <Card />
        <Card />
      </View>
    )
  }
}

export default App
