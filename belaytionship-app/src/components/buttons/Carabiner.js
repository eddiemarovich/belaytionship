import React, { Component } from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'


class Carabiner extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View>
          <Image style= {style.carabinerStyle} source= {require('../../../assets/images/carabiner.png')} />
        </View>
      </TouchableOpacity>
    )
  }
}
const style = StyleSheet.create({
  carabinerStyle: {
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    width: 30,
    // marginLeft: 290,
    opacity: .5,
    transform: [{ rotate: '20 deg'}]
  }
})

export { Carabiner }
