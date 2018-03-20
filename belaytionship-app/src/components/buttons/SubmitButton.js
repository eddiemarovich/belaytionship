import React, { Component, } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class SubmitButton extends Component {
  render () {
    return (
      <TouchableOpacity>
        <View style= {styles.buttonStyle}>
          <Text style= {styles.textStyle}>Update Bio</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#3087BD',
    height: 50,
    width: 250,
    marginTop: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1
  },
  textStyle: {
    fontFamily: 'Comfortaa-Regular',
    color: 'white',
    fontSize: 22
  }
})

export { SubmitButton }
