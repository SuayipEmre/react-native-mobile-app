import { Dimensions, ScrollView, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/header'
import FeaturedMovie from '../../components/featuredMovie'
import { MovieTypes } from '../../types/movie'
import MovieList from '../../components/movieList'


type HomeScreenContainerPropsType = {
    popularMovies: Array<MovieTypes> | [],
    topRated: Array<MovieTypes> | [],
    nowPlaying: Array<MovieTypes> | [],
    upComing: Array<MovieTypes> | [],
}
const { width, height } = Dimensions.get('screen')

const HomeScreenContainer: React.FC<HomeScreenContainerPropsType> = ({
    popularMovies = [],
    topRated = [],
    nowPlaying = [],
    upComing = [],
    
}) => {

    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center', marginTop: 16, }}>
            <View style={{ width: width * 0.8 }}>
                <Header />
                <FeaturedMovie movie={popularMovies[2]} />

                <View style={{ marginTop: 12, gap: 7, }}>
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>Recently Popular</Text>
                    <MovieList movies={popularMovies} />
                </View>

                <View style={{ marginTop: 12, gap: 7, }}>
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>Top Rated</Text>
                    <MovieList movies={topRated} />
                </View>

                <View style={{ marginTop: 12, gap: 7, }}>
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>Now Playing</Text>
                    <MovieList movies={nowPlaying} />
                </View>

                <View style={{ marginTop: 12, gap: 7, }}>
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>Upcoming</Text>
                    <MovieList movies={upComing} />
                </View>

                
            </View>
        </ScrollView >
    )
}

export default HomeScreenContainer
