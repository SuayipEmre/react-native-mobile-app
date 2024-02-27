import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MovieTypes } from '../../types/movie'
import { Image } from 'react-native'
import styles from './styles'

type MovieCardPropTypes = {
    movieItem: MovieTypes,
    index : number
}
const {height : hp } = Dimensions.get("window")

const MovieCard: React.FC<MovieCardPropTypes> = ({ movieItem, index }) => {

    return (
        <View style={[{
            height : index % 3 == 0 ? hp / 4  : hp * 0.30,
        },   styles.container]} >
            <Image source={{ uri: `${process.env.IMAGE_PATH}/${movieItem.poster_path}` }}
            
            style={[{
               
            },styles.image]}/>
        </View>
    )
}

export default MovieCard
