import React, { Component, } from 'react'
import { View, StyleSheet, Text, Image, TextInput, Button } from 'react-native'
import { Background } from '../components/'
import { SubmitButton } from '../components/buttons'
import firebase from 'firebase'


class Profile extends Component {
  constructor(props){
    super(props)
    this.state= {
      user: {},
      textInput: '',
      personalInfo: 'Looking for committed climbing partners!'
    }
  }

  componentWillMount(){
    this.setState({user: this.props.signedInUser, matches: this.props.matches}, () => {
      console.log('this.state', this.state.user)
    })
  }

  updateBio = () => {
    this.setState({personalInfo: this.state.textInput})
  }


  render () {
    const userFbId = this.state.user.id
    const userFbPic = `https://graph.facebook.com/${userFbId}/picture?height=500`

    return (
      <View style= {styles.viewContainer}>
        <Background />
        <Text style= {styles.profileTitleStyle}>Your Profile</Text>
        <View style = {styles.profileContainer}>
          <Text style = {styles.nameStyle}>{this.state.user.Name}</Text>
          <Image source={{uri: userFbPic}} style= {styles.pictureStyle} />
          <Text style = {styles.nameStyle}>Bio</Text>
          <View style= {styles.bio}>
            <Text style= {{margin: 3, fontFamily: 'Comfortaa-Regular', fontSize: 22, color: 'white', }}>
              {this.state.personalInfo}
            </Text>
          </View>
          <View style= {{alignItems: 'center'}}>
            <TextInput
              style= {styles.textInput}
              editable= {true}
              placeholder= 'Update Info... (80 character   max)'
              placeholderTextColor= '#808080'
              multiline= {true}
              maxLength= {80}
              onChangeText= {(text) => {this.setState({textInput: text})}}
            />

          </View>
          <SubmitButton updateBio= {this.updateBio} style= {{marginTop: 55}} />
        </View>
      </View>
    )
  }
}

const styles = {
  bio: {
    width: 300,
    height: 80,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#3087BD',
  },
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    height: 120,
    backgroundColor:'#3087BD',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  textInput: {
    color: 'black',
    opacity: .7,
    marginTop: 20,
    height: 80,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    fontFamily: 'Comfortaa-Regular',
    fontSize: 22,
    flexWrap: 'wrap',
  },
  profileTitleStyle: {
    color: 'white',
    fontSize: 56,
    fontFamily: 'Pacifico-Regular',
    transform: [{ rotate: '355 deg'}],
    marginTop: 10,
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: .5
  },
  pictureStyle: {
    borderRadius: 55,
    height: 110,
    width: 110,
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 25
  },
  nameStyle: {
    color: 'white',
    fontSize: 36,
    fontFamily: 'Comfortaa-Regular',
    fontWeight: 'bold',
  }
}

export { Profile }
