import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../../types/screenTypes'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useFetchMoviesBySearchQuery } from '../../store/features/APIs/movies'
import MovieScreensContainer from '../../containers/movieScreensContainer'
import { colors } from '../../styles/colors'


type ProfileProps = NativeStackScreenProps<RootStackParamList, 'MoviesBySearch'>

const MoviesBySearch: React.FC<ProfileProps> = ({ route, navigation }) => {

  const { value } = route.params

  const { data, isLoading, isError } = useFetchMoviesBySearchQuery(value)


  if (isError) return <Text>Error</Text>
  else if (isLoading) return <Text>Loading</Text>


  return (
    <View style={styles.container}>
      <MovieScreensContainer movie={data.results} />
    </View>
  )
}

export default MoviesBySearch

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.third
  }
})