// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { Platform, View, ScrollView, Text, Image } from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/AllComponentsScreenStyle'

// Components to show examples (only real point of merge conflict)
import '../Components/AlertMessageComponent'
import '../Components/FullButton'
import '../Components/RoundedButton'
import '../Components/DrawerButton'
// import '../Components/MapCallout'
// Examples Render Engine
import ExamplesRegistry from '../Services/ExamplesRegistry'

class AllComponentsScreen extends React.Component {

  renderAndroidWarning () {
    if (Platform.OS === 'android') {
      return (
        <Text style={styles.sectionText}>
          调试模式下,动画会有点卡,打包成正式版后,会流畅很多。
        </Text>
      )
    }
    return null
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background}
               style={styles.backgroundImage}
               resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            {this.renderAndroidWarning()}
            <Text style={styles.sectionText}>
              这里是样式导航,你可以自定义组件的样式。
            </Text>
            <Text style={styles.subtitle} >
              所有已经注册的组件都会在下面渲染出来:
            </Text>
          </View>

          {ExamplesRegistry.render()}

        </ScrollView>
      </View>
    )
  }
}

export default AllComponentsScreen
