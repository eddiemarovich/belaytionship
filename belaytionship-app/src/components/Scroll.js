import React, { Component } from 'react'
import { View, StyleSheet, Animated, PanResponder, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

class Scroll extends Component {

  componentWillMount() {
    this.pan = new Animated.Value(0)

    this.scrollResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.pan.setOffset(this.pan._value)
        this.pan.setValue(0)
      },
      onPanResponderMove: Animated.event([
        null,
        {dx:this.pan},
      ]),
      onPanResponderRelease: (e, {vx}) => {
        this.pan.flattenOffset()
        let move = Math.round(this.pan._value / width) * width

        if (Math.abs(vx) > 0.25) {
          const direction = vx / Math.abs(vx)
          const scrollPosition = direction > 0 ? Math.ceil(this.pan._value / width) : Math.floor(this.pan._value / width)
          move = scrollPosition * width
        }
        const minScroll = (this.props.screens.length - 1) * -width
        Animated.spring(this.pan, {
          toValue: this.clamp(move, minScroll, 0),
          bounciness: 0,
        }).start()
      },
    })
  }
  clamp = (num, min, max) => {
    return num <= min ? min : num >= max ? max : num
  }


  render () {
    const animatedStyles = {
      transform: [
        {translateX: this.pan},
      ],
    }
    const scrollerWidth = this.props.screens.length * width
    return (
      <Animated.View style= {[styles.scrollStyle, animatedStyles, {width: scrollerWidth}]}
        {...this.scrollResponder.panHandlers}>
        {this.props.screens.map((screen, i) => <View key= {i} style= {{width, height}}>{screen}</View>)}
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  scrollStyle: {
    flex: 1,
    backgroundColor: '#41B6FF',
    flexDirection: 'row',
  }
})

export { Scroll }
