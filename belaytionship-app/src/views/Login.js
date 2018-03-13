import React, {Component, } from 'react'
import { StackNavigator } from 'react-navigation'
import { View, StyleSheet } from 'react-native'
import { FacebookButton } from '../components'
import LoginRouter from '../index.js'

class Login extends Component {
  render() {
    return(
      <View style= {styles.containerStyle}>
        <FacebookButton
        onPress={() => this.props.navigate('Home')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export { Login }
