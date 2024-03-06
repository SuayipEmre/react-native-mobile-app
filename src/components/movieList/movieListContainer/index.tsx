import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MovieList from '..'
import { MovieTypes } from '../../../types/movie'
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated'
import { TvShowsTypes } from '../../../types/tvshows'


type MovieListContainerPropsType = {
    title: string,
    content: Array<MovieTypes |TvShowsTypes>,
    fadeDirection: fadeDirection,
    delaytime: number
}

export enum fadeDirection {
    FadeInLeft,
    FadeInRight
}
const MovieListContainer: React.FC<MovieListContainerPropsType> = ({
    title,
    content,
    fadeDirection = 'FadeInLeft',
    delaytime }
) => {
    return (
        <Animated.View
            entering={fadeDirection == 'FadeInLeft' ? FadeInLeft.delay(delaytime) : FadeInRight.delay(delaytime).duration(delaytime).springify().damping(12)}
            style={{ marginTop: 12, gap: 7, }}>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>{title}</Text>
            <MovieList content={content} />
        </Animated.View>

    )
}

export default MovieListContainer

const styles = StyleSheet.create({})