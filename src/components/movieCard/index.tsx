import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MovieTypes } from '../../types/movie'
import { Image } from 'react-native'
import styles from './styles'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MainNavigatorStackParamList } from '../../navigators/types'
import { ActiveContent } from '../../types/activeContent'
import { TvShowsTypes } from '../../types/tvshows'
import Animated, { FadeInUp } from 'react-native-reanimated'

type MovieCardPropTypes = {
    contentItem: MovieTypes | TvShowsTypes,
    index: number,
    activeContent: ActiveContent
}
const { height: hp } = Dimensions.get("window")

const MovieCard: React.FC<MovieCardPropTypes> = ({ contentItem, index, activeContent }) => {

    const navigation = useNavigation<NavigationProp<MainNavigatorStackParamList>>()

    const handleMovieDetails = () => {

        navigation.navigate('ContentDetailsScreen', {
            content_id: contentItem.id,
            content_title: contentItem.title,
            activeContent
        })


    }
    return (
        <Animated.View 
        entering={FadeInUp.delay(100 * index).duration(100).springify().damping(12)}
        >
            <TouchableOpacity style={[{
                height: index % 3 == 0 ? hp / 4 : hp * 0.30,
            }, styles.container]} onPress={handleMovieDetails} >
                <Image source={{ uri: `${process.env.IMAGE_PATH}/${contentItem.poster_path}` }} style={styles.image} />

            </TouchableOpacity>
        </Animated.View>
    )
}

export default MovieCard
