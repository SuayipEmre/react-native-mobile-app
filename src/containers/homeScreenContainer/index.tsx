import { Dimensions, ScrollView, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/header'
import FeaturedMovie from '../../components/featuredMovie'
import { MovieTypes } from '../../types/movie'


type HomeScreenContainerPropsType = {
    movies: Array<MovieTypes> | []
}
const { width, height } = Dimensions.get('screen')

const HomeScreenContainer: React.FC<HomeScreenContainerPropsType> = ({ movies = [] }) => {
    return (
        <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', marginTop:16, }}>
            <View style={{width : width * 0.8}}>
                <Header />
                <FeaturedMovie movie={movies[2]} />
            </View>
        </ScrollView >
    )
}

export default HomeScreenContainer
