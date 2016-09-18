import React, {Component} from 'react'
import {Scene, Router} from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen'
import AllComponentsScreen from '../Containers/AllComponentsScreen'
import UsageExamplesScreen from '../Containers/UsageExamplesScreen'
import LoginScreen from '../Containers/LoginScreen'
import ListviewExample from '../Containers/ListviewExample'
import ListviewGridExample from '../Containers/ListviewGridExample'
import ListviewSectionsExample from '../Containers/ListviewSectionsExample'
import MapviewExample from '../Containers/MapviewExample'
import APITestingScreen from '../Containers/APITestingScreen'
import ThemeScreen from '../Containers/ThemeScreen'
import DeviceInfoScreen from '../Containers/DeviceInfoScreen'


import PageOne from '../Containers/PageOne';
import PageTwo from '../Containers/PageTwo';
/* **************************
 * Documentation: https://github.com/aksonov/react-native-router-flux
 ***************************/

class NavigationRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="pageOne"
                 component={PageOne}
                 title="PageOne"
                 initial={true}/>
          <Scene key="pageTwo"
                 component={PageTwo}
                 title="PageTwo"/>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
