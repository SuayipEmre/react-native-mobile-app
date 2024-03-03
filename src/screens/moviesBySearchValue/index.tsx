import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useFetchMoviesBySearchQuery } from '../../store/features/APIs/movies'
import MovieScreensContainer from '../../containers/movieScreensContainer'
import { colors } from '../../styles/colors'
import { MainNavigatorStackParamList } from '../../navigators/types'
import Error from '../../components/errorAnimation'
import Loading from '../../components/loading'


type ProfileProps = NativeStackScreenProps<MainNavigatorStackParamList, 'MoviesBySearchScreen'>

const MoviesBySearchScreen: React.FC<ProfileProps> = ({ route, navigation }) => {

  const { value } = route.params

  const { data, isLoading, isError } = useFetchMoviesBySearchQuery(value)


  if (isError) return <Error />
  else if (isLoading) return <Loading />


  return (
    <View style={styles.container}>
      <MovieScreensContainer movie={data.results} />
    </View>
  )
}

export default MoviesBySearchScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.third
  }
})