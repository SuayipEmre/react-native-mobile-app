import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainNavigatorStackParamList } from '../../navigators/types'
import { colors } from '../../styles/colors'
import { useFetchMovieDetailsQuery } from '../../store/features/APIs/movies'
import MovieDetailScreenContainer from '../../containers/movieDetailScreenContainer'


type ProfileProps = NativeStackScreenProps<MainNavigatorStackParamList, 'MovieDetailsScreen'>


const MovieDetailsScreen : React.FC<ProfileProps> = ({route}) => {


    const {movie_id} = route.params

    const {data, isLoading, isError } = useFetchMovieDetailsQuery(movie_id)
    

    if  (isError) return <Text>Err</Text>
    else if (isLoading) return <Text>Loading</Text>



  return (
    <View style={styles.container}>
      <MovieDetailScreenContainer movie={data}  />
    </View>
  )
}

export default MovieDetailsScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.third
    }
})