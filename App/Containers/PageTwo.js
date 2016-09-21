/**
 *
 * @author keyy/1501718947@qq.com 16/9/18 11:15
 * @description
 */
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import GeolocationExample from '../Components/GeolocationExample'

export default class PageTwo extends Component {
  render() {
    return (
      <View style={{marginTop: 109,marginLeft:20,marginRight:20}}>
        <Text style={{flex:1,textAlign:'center'}}>This is PageTwo!</Text>
        <Text style={{flex:1,textAlign:'center'}}>{this.props.text}</Text>
        <GeolocationExample />
      </View>
    )
  }
}