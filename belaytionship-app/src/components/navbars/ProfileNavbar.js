import firebase from 'firebase'
import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Carabiner, PeaceOut } from '../buttons'

class ProfileNavbar extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style= {styles.profileNavBarStyle}>
        <PeaceOut style= {styles.peaceOutStyle} />
        <Image style= {styles.avatarStyle} source= {require('../../../assets/images/profile-avatar.png')} />
        <Carabiner style= {styles.carabinerStyle}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  profileNavBarStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    marginTop: 30,

  },
  avatarStyle: {
    display: 'flex',
    flexDirection: 'row',
    height: 75,
    width: 75,
    marginRight: 20,
    marginTop: 15,
    opacity: .5
  },

})



export { ProfileNavbar }
