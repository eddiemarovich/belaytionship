import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { MessageIcon, AvatarIcon } from '../buttons'

class CardStackNavbar extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style= {styles.cardStackNavbarStyle}>
        <AvatarIcon />
        <Image style= {styles.carabinerStyle} source= {require('../../../assets/images/carabiner.png')} />
        <MessageIcon />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardStackNavbarStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    marginTop: 30,
  },
  carabinerStyle: {
    display: 'flex',
    flexDirection: 'row',
    height: 80,
    width: 40,
    opacity: .5,
    marginTop: 10,
    transform: [{ rotate: '20 deg'}]
  }
})

export { CardStackNavbar }
