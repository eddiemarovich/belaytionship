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
    marginLeft: 15,
    borderRadius: 35,
    height: 68,
    width: 68,
    borderWidth: 2,
    borderColor: 'white'
  },
  nameStyle: {
    color: 'white',
    marginLeft: 5,
    fontFamily: 'Comfortaa-Regular',
    fontSize: 32
  },
  userInfo: {
    backgroundColor: '#3087BD',
    borderRadius: 40,
    borderColor: 'white',
    borderWidth: 2,
    height: 75,
    width: 350,
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  emailStyle: {
    marginLeft: 5,
    color: 'white',
    fontSize: 18,
    fontFamily: 'Comfortaa-Regular',
  },
})


export { MatchedUser }
