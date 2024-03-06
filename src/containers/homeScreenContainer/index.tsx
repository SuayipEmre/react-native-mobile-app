import { Dimensions, ScrollView,  View } from 'react-native'
import React from 'react'
import Header from '../../components/header'
import FeaturedMovie from '../../components/featuredMovie'
import { MovieTypes } from '../../types/movie'
import GenresModal from '../../components/genresModal'
import MovieListContainer, { fadeDirection } from '../../components/movieList/movieListContainer'
import { useGenresModalVisible } from '../../store/features/modals/genres/hooks'
import { TvShowsTypes } from '../../types/tvshows'


type HomeScreenContainerPropsType = {
    trendingMovies: Array<MovieTypes> ,
    trendingTVShows: Array<TvShowsTypes> ,
    popularMovies: Array<TvShowsTypes>,
    popularTVShows: Array<MovieTypes> ,
}
const { width } = Dimensions.get('screen')

const HomeScreenContainer: React.FC<HomeScreenContainerPropsType> = ({
    popularMovies,
    trendingMovies,
    popularTVShows ,
    trendingTVShows,
}) => {


    const isModalVisible: boolean = useGenresModalVisible()

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ marginTop: 16, alignItems: 'center' }}>
            <View style={{ width: width * 0.9 }}>

                <Header />
                <FeaturedMovie movie={popularMovies[1]} />

                <MovieListContainer title='Trend Movies' content={trendingMovies} fadeDirection={fadeDirection.FadeInRight} delaytime={400} />
                <MovieListContainer title='Trend TV Shows' content={trendingTVShows} fadeDirection={fadeDirection.FadeInRight} delaytime={900} />
                <MovieListContainer title='Popular Movies' content={popularMovies} fadeDirection={fadeDirection.FadeInLeft} delaytime={100} />
                <MovieListContainer title='Now Playing' content={popularTVShows} fadeDirection={fadeDirection.FadeInLeft} delaytime={600} />
            </View>
            {
                isModalVisible && <GenresModal />
            }
        </ScrollView >
    )
}

export default HomeScreenContainer
