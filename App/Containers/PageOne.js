/**
 * 示例页面
 * @author keyy/1501718947@qq.com 16/9/18 11:14
 * @description
 */
import React, {Component} from 'react'
import {View, Text} from 'react-native'
import Button from 'react-native-button'
import {Actions} from 'react-native-router-flux'

export default class PageOne extends Component {

  render() {
    const goToPageTwo = () => Actions.pageTwo({text: 'Hello World!'});
    return (
      <View style={{margin: 128}}>
        <Text onPress={goToPageTwo}>This is PageOne!</Text>
        <Button onPress={Actions.tabBar}>Go to TabBar page</Button>
        <Button onPress={Actions.mapViewExample}>
          Go to mapViewExample
        </Button>
      </View>


    )
  }
}