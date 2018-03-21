import React, { Component } from 'react'
import { ImageBackground, View, StyleSheet } from 'react-native'

const Background = () => {
  return (
      <ImageBackground style= {styles.backgroundStyle} source= {require('../../assets/images/LandingPage.png')} />

  )
}
const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    position: 'absolute',
    height: 671,
    width: 380,
  }
})


export { Background }
