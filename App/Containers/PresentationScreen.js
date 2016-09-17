import React from 'react'
import {ScrollView, Text, Image, View} from 'react-native'
import {Images} from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import {Actions as NavigationActions} from 'react-native-router-flux'

// Styles
import styles from './Styles/PresentationScreenStyle'

export default class PresentationScreen extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background}
               style={styles.backgroundImage}
               resizeMode='stretch'/>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.clearLogo}
                   style={styles.logo}/>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionText}>
              下面是不同的开发场景
            </Text>
          </View>

          <RoundedButton onPress={NavigationActions.componentExamples}>
            组件示例
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.usageExamples}>
            示例
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.apiTesting}>
            API测试
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.theme}>
            主题
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.deviceInfo}>
            设备信息
          </RoundedButton>

          <View style={styles.centered}>
            <Text style={styles.subtitle}>测试</Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}
