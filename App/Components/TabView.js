/**
 *
 * @author keyy/1501718947@qq.com 16/9/18 11:59
 * @description
 */
import React from 'react';
import {PropTypes} from "react";
import {StyleSheet, Text, View} from "react-native";
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';

const contextTypes = {
  drawer: React.PropTypes.object,
};

const propTypes = {
  name: PropTypes.string,
  sceneStyle: View.propTypes.style,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 2,
    borderColor: 'red',
  },
});

const TabView = (props, context) => {
  return (
    <View style={[styles.container, props.sceneStyle]}>
      <Text>Tab {props.title}</Text>
      {props.name === 'tab1_1' &&
      <Button onPress={Actions.tab1_2}>
        next screen for tab1_1
      </Button>
      }
      {props.name === 'tab2_1' &&
      <Button onPress={Actions.tab2_2}>
        next screen for tab2_1
      </Button>
      }
      <Button onPress={Actions.pop}>
        Back
      </Button>
      <Button onPress={() => {
        Actions.tab1();
      }}>
        Switch to tab1
      </Button>
      <Button onPress={() => {
        Actions.tab2();
      }}>
        Switch to tab2
      </Button>
      <Button onPress={() => {
        Actions.tab3();
      }}>
        Switch to tab3
      </Button>
      <Button onPress={() => {
        Actions.tab4();
      }}>
        Switch to tab4
      </Button>
      <Button onPress={() => {
        Actions.tab5();
      }}>
        Switch to tab5
      </Button>
    </View>
  );
};

TabView.contextTypes = contextTypes;
TabView.propTypes = propTypes;

export default TabView;