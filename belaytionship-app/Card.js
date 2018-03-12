import React, {Component} from 'react'
import {  StyleSheet, View, Image, Text, PanResponder, Animated, Dimensions } from 'react-native'

const fbImage = 'https://graph.facebook.com/1081200058/picture?height=500'
const { width, height } = Dimensions.get('window')

class Card extends Component {
  componentWillMount() {
      this.pan = new Animated.ValueXY()

      this.cardPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
          null,
          {dx:this.pan.x, dy:this.pan.y},
        ]),
        onPanResponderRelease: () => {
          Animated.spring(this.pan, {
            toValue: {x: 0, y: 0},
            friction: 4.5,
          }).start()
       },
      })
    }

    render() {
      const rotateCard = this.pan.x.interpolate({
        inputRange: [-100, 0, 100],
        outputRange: ['-5deg', '0deg', '5deg']
      })

      const animatedStyle = {
        transform: [
          {translateX: this.pan.x},
          {translateY: this.pan.y},
          {rotate: rotateCard},
        ],
      }

      return (
        <Animated.View
          {...this.cardPanResponder.panHandlers}
          style={[styles.card, animatedStyle]}>
          <Image
            style={{flex:1}}
            source={{uri: fbImage}}
          />
          <View style={{margin:20}}>
            <Text style={{fontSize:20}}>Eddie, 26</Text>
            <Text style={{fontSize:15, color:'darkgrey'}}>Sport climber</Text>
          </View>
        </Animated.View>
      )
    }
  }

  const styles = StyleSheet.create({
    card: {
      position: 'absolute',
      width: width - 20,
      height: height * .7,
      top: (height * 0.3) / 2,
      overflow: 'hidden',
      backgroundColor: 'white',
      margin: 10,
      borderWidth: 1,
      borderColor: 'lightgrey',
      borderRadius: 8,
    },
  })

  export default Card
