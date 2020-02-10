import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Keyboard, TextInput } from 'react-native'
import { connect } from 'react-redux'

import RoundedButton from '../../../Components/RoundedButton'
import SearchResult from '../Components/SearchResult'

import { Images } from '../../../Themes'
import Colors from '../../../Themes/Colors'
import styles from './Styles/SearchScreen'

import MovieSearchActions from '../../../Redux/MovieSearchRedux'

class SearchScreen extends Component {
  state = { searchInput: '' }

  handleSearchInputChange = (s) => this.setState({ searchInput: s });

  render () {

    return (
      <View style={styles.mainContainer}>
        {/* <Image source={Images.backgroundBlue} 
            style={styles.backgroundImage} 
            resizeMode='stretch' /> */}
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            {/* <Image source={Images.filmReel} style={styles.logo} /> */}
            <Text style={styles.title}>Movie Search</Text>
          </View>

          <View style={styles.section}>
            <View style={styles.searchInputContainer}>
              <TextInput
                style={styles.searchInputText}
                placeholder='Movie'
                placeholderTextColor={Colors.lightPurple}
                maxLength={30}
                onBlur={Keyboard.dismiss}
                value={this.state.name}
                onChangeText={this.handleSearchInputChange}
                onSubmitEditing={() => this.props.onSearch(
                  this.state.searchInput,
                  // this.props.page,
                  // this.props.navigation.navigate
                )}
              />
            </View>
          </View>

          <RoundedButton 
            onPress={() => this.props.onSearch(
              this.state.searchInput,
              // this.props.page,
              // this.props.navigation.navigate
            )}
          >Search
          </RoundedButton>

          {/* <RoundedButton 
            onPress={() => this.props.navigation.navigate('MapScreen')}
          >Theatres</RoundedButton> */}
          <View style={styles.section}>
            {this.props.matches.map(match => <SearchResult match={match} key={match.id}/>)}
          </View>

        </ScrollView>
      </View>
    )
  }
}

const mapState = (state) => ({
  // page: state.movies.page, // TODO paginga
  matches: state.movies.matches
})

const mapDispatch = (dispatch) => ({
  onSearch: (searchInput, navigator) => {
    if (!searchInput) {
      return // fail silently -> TODO animate textinput
    }

    dispatch(MovieSearchActions.request({ query: searchInput }))
    // navigator('Screen')
  }
})

export default connect(mapState, mapDispatch)(SearchScreen)

