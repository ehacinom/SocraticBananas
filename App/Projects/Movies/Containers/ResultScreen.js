import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import RoundedButton from '../../../Components/RoundedButton'

import { Images } from '../../../Themes'
import styles from './Styles/ResultScreen'

export default class MapScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image 
          source={Images.backgroundPurple} 
          style={styles.backgroundImage} 
        resizeMode='stretch' />
        <ScrollView style={styles.container}>
          {/* <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View> */}



          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              
            </Text>
          </View>

          <RoundedButton 
            onPress={() => this.props.navigation.navigate('SearchScreen')}
          >Search Again
          </RoundedButton>
        </ScrollView>
      </View>
    )
  }
}
