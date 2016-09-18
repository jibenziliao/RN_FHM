/**
 *
 * @author keyy/1501718947@qq.com 16/9/18 11:15
 * @description
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PageTwo extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Text>This is PageTwo!</Text>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
}