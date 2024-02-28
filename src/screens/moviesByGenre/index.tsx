import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../styles/colors';
import {  useFetchMoviesBygenreQuery } from '../../store/features/APIs/movies';
import MovieScreensContainer from '../../containers/movieScreensContainer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/screenTypes';

type ProfileProps = NativeStackScreenProps<RootStackParamList, 'MoviesByGenreScreen'>

const MoviesByGenreScreen : React.FC<ProfileProps | any> = ({route, navigation}) => {
  
    const{genreid}  = route.params
    const{data, isLoading, isError} = useFetchMoviesBygenreQuery(genreid)





    if (isError) return <Text>Err</Text>
    else if (isLoading) return <Text>Loading</Text>
    
  
    return (
    <View style={styles.container}>
        <MovieScreensContainer movie={data.results} />
    </View>
  )
}

export default MoviesByGenreScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.third,
        flex :1,
    }
})