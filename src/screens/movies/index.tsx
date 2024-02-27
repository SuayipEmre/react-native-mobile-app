import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../styles/colors';
import { useFetchMoviesBygenreQuery } from '../../store/features/APIs/movies';
import MoviesScreenContainer from '../../containers/moviesScreenContainer';
const MoviesScreen : React.FC<any> = ({route, navigation}) => {
  
    const{isMoviesBySearch,isMoviesByGenre,value, genreid}  = route.params


    const{data, isLoading, isError} = useFetchMoviesBygenreQuery(genreid)

    if (isError) return <Text>Err</Text>
    else if (isLoading) return <Text>Loading</Text>
    
  
    return (
    <View style={styles.container}>
        <MoviesScreenContainer movie={data.results} />
    </View>
  )
}

export default MoviesScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.third,
        flex :1,
    }
})