import { Text } from 'react-native'
import React from 'react'
import MovieList from '..'
import { MovieTypes } from '../../../types/movie'
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated'
import { TvShowsTypes } from '../../../types/tvshows'


type ContentListContainerPropsType = {
    title: string,
    content: Array<MovieTypes> | Array<TvShowsTypes>,
    fadeDirection: fadeDirection,
    delaytime: number,
    activeContent : 'Movie' | 'TV'
}

export enum fadeDirection {
    FadeInLeft,
    FadeInRight
}
const ContentListContainer: React.FC<ContentListContainerPropsType> = ({
    title,
    content,
    fadeDirection = 'FadeInLeft',
    delaytime ,
    activeContent,
}
) => {


    

    return (
        <Animated.View
            entering={fadeDirection == 'FadeInLeft' ? FadeInLeft.delay(delaytime) : FadeInRight.delay(delaytime).duration(delaytime).springify().damping(12)}
            style={{ marginTop: 12, gap: 7, }}>
            <Text style={{ color: '#eee', fontSize: 16, fontWeight: '600' }}>{title}</Text>
            <MovieList content={content} activeContent={activeContent} />
        </Animated.View>

    )
}

export default ContentListContainer
