import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import { useFetchPopularMoviesQuery, useFetchTopRatedMoviesQuery, useFetchTrendingMoviesQuery, useFetchUpComingMoviesQuery } from '../../store/features/APIs/movies'
import Loading from '../../components/loading'
import Error from '../../components/errorAnimation'
import { colors } from '../../styles/colors'
import ContentLayout from '../../layouts/contentLayout'
import Header from '../../components/header'
import FeaturedMovie from '../../components/featuredMovie'
import ContentListContainer, { fadeDirection } from '../../components/contentList/contentListContainer'

const MoviesScreen = () => {
    const { data: trendingMovies, isError: isTrendingMoviesError, isLoading: isTrendingMoviesLoading } = useFetchTrendingMoviesQuery({})
    const { data: popularMovies, isError: popularMoviesError, isLoading: popularMoviesLoading } = useFetchPopularMoviesQuery({})
    const { data: topRatedMovies, isError: topRatedMoviesError, isLoading: topRatedMoviesLoading } = useFetchTopRatedMoviesQuery({})
    const { data: upcomingMovies, isError: upComingMoviesError, isLoading: upComingMoviesLoading } = useFetchUpComingMoviesQuery({})



    if (isTrendingMoviesError || popularMoviesError || topRatedMoviesError || upComingMoviesError) return <Error />
    else if (isTrendingMoviesLoading || popularMoviesLoading || topRatedMoviesLoading || upComingMoviesLoading) return <Loading />

    return (
        <View style={{ backgroundColor: colors.third, alignItems: 'center' }}>

            <ScrollView
                showsVerticalScrollIndicator={false}>
                <ContentLayout >
                    <Header activeScreen='Movie' />
                    <FeaturedMovie content={trendingMovies.results[0]}  activeContent='Movie' />
                    <ContentListContainer title='Trending' content={trendingMovies.results} fadeDirection={fadeDirection.FadeInLeft} delaytime={100} activeContent='Movie' />
                    <ContentListContainer title='Popular' content={popularMovies.results} fadeDirection={fadeDirection.FadeInRight} delaytime={400} activeContent='Movie' />
                    <ContentListContainer title='Top Rated' content={topRatedMovies.results} fadeDirection={fadeDirection.FadeInRight} delaytime={900}  activeContent='Movie'/>
                    <ContentListContainer title='Upcoming ' content={upcomingMovies.results} fadeDirection={fadeDirection.FadeInLeft} delaytime={100}  activeContent='Movie'/>
                </ContentLayout>

            </ScrollView>
        </View >
    )
}

export default MoviesScreen
