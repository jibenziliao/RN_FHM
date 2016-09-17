import React, { Component } from 'react'
import { ScrollView, Image } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

class DrawerContent extends Component {

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressComponents = () => {
    this.toggleDrawer();
    NavigationActions.componentExamples();
  };

  handlePressUsage = () => {
    this.toggleDrawer();
    NavigationActions.usageExamples();
  };

  handlePressAPI = () => {
    this.toggleDrawer();
    NavigationActions.apiTesting();
  };

  handlePressTheme = () => {
    this.toggleDrawer();
    NavigationActions.theme();
  };

  handlePressDevice = () => {
    this.toggleDrawer();
    NavigationActions.deviceInfo();
  };

  render () {
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        <DrawerButton text='组件示例' onPress={this.handlePressComponents} />
        <DrawerButton text='示例' onPress={this.handlePressUsage} />
        <DrawerButton text='API测试' onPress={this.handlePressAPI} />
        <DrawerButton text='主题' onPress={this.handlePressTheme} />
        <DrawerButton text='设备信息' onPress={this.handlePressDevice} />
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
};

export default DrawerContent
