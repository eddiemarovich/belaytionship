import React, { Component } from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'

class AvatarIcon extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View>
          <Image style= {styles.avatarIcon} source= {require('../../../assets/images/profile-avatar.png')}/>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  avatarIcon: {
    display: 'flex',
    flexDirection: 'row',
    height: 70,
    width: 70,
    marginTop: -5,
    opacity: .5,
  }
})

export { AvatarIcon }
