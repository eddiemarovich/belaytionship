import React, { Component } from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'



class PeaceOut extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View>
          <Image style= {styles.peaceOutStyle} source= {require('../../../assets/images/peace-out.png')} />
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  peaceOutStyle: {
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    width: 60,
    opacity: .5,
    transform: [{ rotate: '340 deg'}]
  },
})

export { PeaceOut }
