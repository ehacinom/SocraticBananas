import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../../../Themes'
import Fonts from '../../../../Themes/Fonts'
import Colors from '../../../../Themes/Colors'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  sectionTitle: ApplicationStyles.sectionTitle,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },

  title: {
    alignItems: 'center',
    color: Colors.raspberryPink,
    marginTop: 140,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    ...Fonts.style.h1,
    fontWeight: '800',
    fontSize: 45,
  },
  searchInputContainer: {
    padding: 10,
    justifyContent: 'space-between',
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginTop: 40,
  },
  searchInputText: {
    color: 'white',
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  }

})
