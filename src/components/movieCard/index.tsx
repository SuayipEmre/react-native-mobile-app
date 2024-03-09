import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MovieTypes } from '../../types/movie'
import { Image } from 'react-native'
import styles from './styles'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MainNavigatorStackParamList } from '../../navigators/types'
import { ActiveContent } from '../../types/activeContent'

type MovieCardPropTypes = {
    movieItem: MovieTypes,
    index: number,
    activeContent: ActiveContent
}
const { height: hp } = Dimensions.get("window")

const MovieCard: React.FC<MovieCardPropTypes> = ({ movieItem, index, activeContent }) => {

    const navigation = useNavigation<NavigationProp<MainNavigatorStackParamList>>()

    const handleMovieDetails = () => {

        navigation.navigate('ContentDetailsScreen', {
            content_id: movieItem.id,
            content_title: movieItem.title,
            activeContent
        })


    }
    return (
        <TouchableOpacity style={[{
            height: index % 3 == 0 ? hp / 4 : hp * 0.30,
        }, styles.container]} onPress={handleMovieDetails} >
            <Image source={{ uri: `${process.env.IMAGE_PATH}/${movieItem.poster_path}` }}

                style={[{

                }, styles.image]} />
        </TouchableOpacity>
    )
}

export default MovieCard
