import React, { Component, } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { Background, MatchedUser } from '../components/'
import firebase from 'firebase'



class Matches extends Component {
  constructor(props){
    super(props)

  }

  componentDidMount(){
    this.getEmail('100000210717763')
  }
  getEmail = async (id) => {
    let response = await fetch (`https://graph.facebook.com/${id}?fields=email&access_token=553125241723031|cekDbkq9I_zrD1unFrgLYiV8A0I`)
    let data = await response.json()
    console.log(data);
  }


  render () {
    return (
      <View style= {styles.profileContainer}>
        <Background />
        <Text style= {styles.matchesStyle}>Matches</Text>
        <View style= {styles.matchesList}>
          <View style= {styles.userInfo}>
            <Image style= {styles.pictureStyle} source= {{uri: `https://graph.facebook.com/1218472169/picture?height=500`}} />
            <View>
              <Text style= {styles.nameStyle}>Brennen</Text>
              <Text style= {styles.emailStyle}>brennenbull@aol.com</Text>
            </View>
          </View>
          <View style= {styles.userInfo}>
            <Image style= {styles.pictureStyle} source= {{uri: `https://graph.facebook.com/1081980628/picture?height=500`}} />
            <View>
              <Text style= {styles.nameStyle}>Cat</Text>
              <Text style= {styles.emailStyle}>catdog@hotmail.com</Text>
            </View>
          </View>
          <View style= {styles.userInfo}>
            <Image style= {styles.pictureStyle} source= {{uri: `https://graph.facebook.com/100000210717763/picture?height=500`}} />
            <View>
              <Text style= {styles.nameStyle}>Zach</Text>
              <Text style= {styles.emailStyle}>jacknadiak@aol.com</Text>
            </View>
          </View>
          <MatchedUser matchedUser= {this.props.matchedUser} likedUsers= {this.props.likedUsers}/>
        </View>
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
  },
  pictureStyle: {
    marginLeft: 15,
    borderRadius: 30,
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
  matchesList: {
    flexDirection: 'column'
  }
})

export { Matches }
