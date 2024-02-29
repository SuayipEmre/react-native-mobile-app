import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { HomeNavigatorStackParamList } from '../../navigators/types'
import { colors } from '../../styles/colors'
import { useFetchMovieDetailsQuery } from '../../store/features/APIs/movies'
import { movieDetailsTypes } from '../../types/movie'
import MovieDetailScreenContainer from '../../containers/movieDetailScreenContainer'


type ProfileProps = NativeStackScreenProps<HomeNavigatorStackParamList, 'MovieDetailsScreen'>


const MovieDetailsScreen : React.FC<ProfileProps> = ({route, navigation}) => {


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