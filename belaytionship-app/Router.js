import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import { Login, Home } from './src/views'


const RouterComponent = () => {
  return (
    <Router>
      <Scene key= "root">
        <Scene key= "login" component= {Login} hideNavBar initial/>
        <Scene key= "home" component= {Home} hideNavBar  />
      </Scene>
    </Router>
  )

}



export default RouterComponent
