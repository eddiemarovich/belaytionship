import React, { Component, } from 'react'
import { View, StyleSheet } from 'react-native'


class Profile extends Component {
  render () {
    return (
      <View style= {styles.profileContainer} />
    )
  }
}

const styles = {
  profileContainer: {
    flex: 1,
    backgroundColor: '#41B6FF'
  }
}

export { Profile }
