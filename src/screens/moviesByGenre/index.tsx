import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../styles/colors';
import {  useFetchMoviesBygenreQuery } from '../../store/features/APIs/movies';
import MovieScreensContainer from '../../containers/movieScreensContainer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainNavigatorStackParamList } from '../../navigators/types';
import Error from '../../components/errorAnimation';
import Loading from '../../components/loading';

type ProfileProps = NativeStackScreenProps<MainNavigatorStackParamList, 'MoviesByGenreScreen'>

const MoviesByGenreScreen : React.FC<ProfileProps> = ({route, navigation}) => {
  
    const{genreid}  = route.params
    const{data, isLoading, isError} = useFetchMoviesBygenreQuery(genreid)





    if (isError) return <Error />
    else if (isLoading) return <Loading />
    
  
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