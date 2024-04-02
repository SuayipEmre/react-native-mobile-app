import {Text} from 'react-native'
import React from 'react'
import styles from './styles'
type NoMatchesTextPropsType = {
    searchValue : string
}
const NoMatchesText : React.FC<NoMatchesTextPropsType> = ({searchValue}) => {
  return (
    <Text style={styles.no_matches_text}>No results for {searchValue}</Text> 
  )
}

export default NoMatchesText
