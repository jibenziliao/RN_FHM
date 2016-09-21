/**
 *
 * @author keyy/1501718947@qq.com 16/9/21 09:55
 * @description
 */
import React,{Component} from 'react'
import {Text,View} from 'react-native'
import Button from 'react-native-button'

class GeolocationExample extends Component{
  constructor(props){
    super(props);
    this.state={
      initialPosition: 'unknown',
      lastPosition: 'unknown'
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
      },
      (error) => alert(error),
      {enableHighAccuracy: true, timeout: 200000, maximumAge: 1000}
    );
  }

  getLocation(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
      },
      (error) => alert(error),
      {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000}
    );
  }

  render() {
    return (
      <View>
        <Button onPress={()=>{this.getLocation()}}>点我开始定位</Button>
        <Text>
          <Text>Initial position: </Text>
          {this.state.initialPosition}
        </Text>
        <Text>
          <Text>Current position: </Text>
          {this.state.lastPosition}
        </Text>
      </View>
    );
  }
}

export default GeolocationExample
