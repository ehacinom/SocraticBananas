import React from 'react'
import { TouchableOpacity, Text, Image, View } from 'react-native'
import styles from './Styles/SearchResult'

/* 
    int: id, popularity, vote_count, 
    bool: video 
    image strings: poster_path, backdrop_path

*/ 

const SearchResult = ({ match }) => (
  <View style={styles.outerContainer}>
    <View style={styles.container}>
    <Text style={styles.name}>{match.title}</Text>
    </View>
  </View>
)

export default SearchResult
