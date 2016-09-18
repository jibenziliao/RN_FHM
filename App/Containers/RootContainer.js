import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import NavigationRouter from '../Navigation/NavigationRouter'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
// import './Config/PushConfig'

// Styles
import styles from './Styles/RootContainerStyle'

class RootContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab:'home'
    };
  }

  componentDidMount () {
    this.props.startup()
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="light-content"
                   backgroundColor="rgba(183,140,31,0.7)"
                   animated={true}/>
        <NavigationRouter />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup())
});

export default connect(null, mapDispatchToProps)(RootContainer)
