import React, { Component } from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'

class MessageIcon extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View>
          <Image style= {styles.messageIconStyle} source= {require('../../../assets/images/message-icon.png')}/>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  messageIconStyle: {
    display: 'flex',
    flexDirection: 'row',
    height: 70,
    width: 70,
    marginTop: -5,
    opacity: .5,
  }
})

export { MessageIcon }
