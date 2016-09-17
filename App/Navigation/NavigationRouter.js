import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
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

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial={true} key='presentationScreen' component={PresentationScreen} title='首页' renderLeftButton={NavItems.hamburgerButton} />
            <Scene key='componentExamples' component={AllComponentsScreen} title='组件' />
            <Scene key='usageExamples' component={UsageExamplesScreen} title='用法' rightTitle='示例' onRight={() => window.alert('示例被点击')} />
            <Scene key='login' component={LoginScreen} title='登录' hideNavBar />
            <Scene key='listviewExample' component={ListviewExample} title='列表示例' />
            <Scene key='listviewGridExample' component={ListviewGridExample} title='列表栅格视图' />
            <Scene key='listviewSectionsExample' component={ListviewSectionsExample} title='区块列表视图' />
            <Scene key='mapviewExample' component={MapviewExample} title='地图示例' />
            <Scene key='apiTesting' component={APITestingScreen} title='API测试' />
            <Scene key='theme' component={ThemeScreen} title='主题' />
            <Scene key='deviceInfo' component={DeviceInfoScreen} title='设备信息' />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
