import React, { Component, } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'


class MatchedUser extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View >
        {this.props.likedUsers.map(e => {
          let firstName = this.props.matchedUser
          console.log('dem props: ', this.props.matchedUser);
          let id = e.toString()
          return (
            <View style= {styles.userInfo} key= {e}>
            <Image
              style= {styles.pictureStyle}
              source= {{uri: `https://graph.facebook.com/${id}/picture?height=500`}}
               />
              <View style= {{flexDirection: 'column'}}>
                <Text style= {styles.nameStyle}>{firstName}</Text>
                <Text style= {styles.emailStyle}>sportisneither@gmail.com</Text>
              </View>
            </View>
          )
        })}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  pictureStyle: {
    borderRadius: 20,
    height: 75,
    width: 75,
    borderWidth: 2,
    borderColor: 'white'
  },
  nameStyle: {
    color: 'white',
    fontFamily: 'Comfortaa-Regular',
    fontSize: 32
  },
  userInfo: {
    flexDirection: 'row',
    marginTop: 6,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  emailStyle: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Comfortaa-Regular',
  },
})


export { MatchedUser }
