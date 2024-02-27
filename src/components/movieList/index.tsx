import { FlatList, Image, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MovieTypes } from '../../types/movie'
import { renderMovies } from './renderMovies'


type MovieListPropsType = {
    movies: Array<MovieTypes>
}
const MovieList: React.FC<MovieListPropsType> = ({ movies }) => {

    return (
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={movies}
                snapToAlignment='center'
                decelerationRate={'normal'}
                renderItem={renderMovies}
            />
    )
}

export default MovieList
