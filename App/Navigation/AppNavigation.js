import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';


import LaunchScreen from '../Containers/LaunchScreen'
import SearchScreen from '../Projects/Movies/Containers/SearchScreen'
import ResultScreen from '../Projects/Movies/Containers/ResultScreen'


import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  SearchScreen: { screen: SearchScreen },
  ResultScreen: { screen: ResultScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'SearchScreen',
  // initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
