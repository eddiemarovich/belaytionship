import React, { Component, } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { ProfileNavbar } from '../components/navbars'
import { Background } from '../components/'


class Matches extends Component {
  constructor(props){
    super(props)
  }

  render () {
    return (
      <View style= {styles.profileContainer}>
        <Background />
        <Text style= {styles.matchesStyle}>Matches</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: '#41B6FF',
    alignItems: 'center',
    height: 120,
    backgroundColor:'#3087BD',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20

  },
  matchesStyle: {
    color: 'white',
    fontSize: 56,
    fontFamily: 'Pacifico-Regular',
    transform: [{ rotate: '355 deg'}],
    marginTop: 20,
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: .5
  }
})

export { Matches }
