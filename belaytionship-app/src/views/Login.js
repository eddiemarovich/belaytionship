import React, {Component, } from 'react'
import { View, StyleSheet } from 'react-native'
import { Actions }  from 'react-native-router-flux'
import { FacebookButton } from '../components'

class Login extends Component {
  render() {
    return(
      <View style={styles.containerStyle}>
        <FacebookButton
          // onPress={() => Actions.home()}
        />
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
