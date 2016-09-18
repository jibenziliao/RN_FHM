import React, {Component} from 'react'
import {Scene, Router} from 'react-native-router-flux'
import PageOne from '../Containers/PageOne';
import PageTwo from '../Containers/PageTwo';
import TabIcon from '../Components/TabIcon';
import TabView from '../Components/TabView';

/* **************************
 * Documentation: https://github.com/aksonov/react-native-router-flux
 ***************************/

class NavigationRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="pageOne"
                 component={PageOne}
                 title="PageOne"
                 initial={true}/>
          <Scene key="pageTwo"
                 component={PageTwo}
                 title="PageTwo"/>
          <Scene key="tabbar" tabs={true} >
            <Scene key="tab1"
                   title="Tab #1"
                   icon={TabIcon}
                   navigationBarStyle={{backgroundColor:'red'}}
                   titleStyle={{color:'white'}}>
              <Scene key="tab1_1"
                     component={TabView}
                     title="Tab #1_1"
                     onRight={()=>alert("Right button")}
                     rightTitle="Right" />
              <Scene key="tab1_2"
                     component={TabView}
                     title="Tab #1_2"
                     titleStyle={{color:'black'}}/>
            </Scene>
            <Scene key="tab2"
                   initial={true}
                   title="Tab #2"
                   icon={TabIcon}>
              <Scene key="tab2_1"
                     component={TabView}
                     title="Tab #2_1"
                     onLeft={()=>alert("Left button!")}
                     leftTitle="Left"/>
              <Scene key="tab2_2"
                     component={TabView}
                     title="Tab #2_2"/>
            </Scene>
            <Scene key="tab3"
                   component={TabView}
                   title="Tab #3"
                   hideTabBar={true}
                   icon={TabIcon}/>
            <Scene key="tab4"
                   component={TabView}
                   title="Tab #4"
                   hideNavBar={true}
                   icon={TabIcon}/>
            <Scene key="tab5"
                   component={TabView}
                   title="Tab #5"
                   icon={TabIcon} />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
