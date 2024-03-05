import { Dimensions, ScrollView, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/header'
import FeaturedMovie from '../../components/featuredMovie'
import { MovieTypes } from '../../types/movie'
import GenresModal from '../../components/genresModal'
import MovieListContainer, { fadeDirection } from '../../components/movieList/movieListContainer'
import { useGenresModalVisible } from '../../store/features/modals/genres/hooks'


type HomeScreenContainerPropsType = {
    popularMovies: Array<MovieTypes> | [],
    topRated: Array<MovieTypes> | [],
    nowPlaying: Array<MovieTypes> | [],
    upComing: Array<MovieTypes> | [],
}
const { width } = Dimensions.get('screen')

const HomeScreenContainer: React.FC<HomeScreenContainerPropsType> = ({
    popularMovies = [],
    topRated = [],
    nowPlaying = [],
    upComing = [],

}) => {


    const isModalVisible: boolean = useGenresModalVisible()

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ marginTop: 16, alignItems: 'center' }}>
            <View style={{ width: width * 0.9 }}>

                <Header />
                <FeaturedMovie movie={popularMovies[1]} />

                <MovieListContainer title='Recently Popular' movies={popularMovies} fadeDirection={fadeDirection.FadeInLeft} delaytime={100} />
                <MovieListContainer title='Top Rated' movies={topRated} fadeDirection={fadeDirection.FadeInRight} delaytime={400} />
                <MovieListContainer title='Now Playing' movies={nowPlaying} fadeDirection={fadeDirection.FadeInLeft} delaytime={600} />
                <MovieListContainer title='Upcoming' movies={upComing} fadeDirection={fadeDirection.FadeInRight} delaytime={900} />
            </View>
            {
                isModalVisible && <GenresModal />
            }
        </ScrollView >
    )
}

export default HomeScreenContainer
