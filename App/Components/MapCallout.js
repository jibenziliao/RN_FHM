import React, { PropTypes } from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import MapView from 'react-native-maps'
import Styles from './Styles/MapCalloutStyle'
import ExamplesRegistry from '../Services/ExamplesRegistry'

//地图标注组件
// Example
ExamplesRegistry.add('Full Button', () =>
  <MapCallout
    location={{
      title: 'Callout Example'
    }}
    onPress={() => window.alert('That tickles!')}
  />
);

export default class MapCallout extends React.Component {
  constructor (props) {
    super(props);
    this.onPress = this.props.onPress.bind(this, this.props.location)
  }

  render () {
    /* ***********************************************************
    * Customize the appearance of the callout that opens when the user interacts with a marker.
    * Note: if you don't want your callout surrounded by the default tooltip, pass `tooltip={true}` to `MapView.Callout`
    *************************************************************/
    const { location } = this.props;
    return (
      <MapView.Callout style={Styles.callout}>
        <TouchableOpacity onPress={this.onPress}>
          <View>
            <Text>{location.title}</Text>
            <Text>{location.description}</Text>
          </View>
        </TouchableOpacity>
      </MapView.Callout>
    )
  }
}

MapCallout.propTypes = {
  location: PropTypes.object.isRequired,
  onPress: PropTypes.func
};
