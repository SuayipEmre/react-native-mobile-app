import {  ScrollView, View } from 'react-native'
import React from 'react'
import { colors } from '../../styles/colors'
import Header from '../../components/header'
import { useFetchOnTheAirTVShowsQuery, useFetchPopularTVShowsQuery, useFetchTopRatedTVShowsQuery, useFetchTrendingTVShowsQuery } from '../../store/features/APIs/tvseries'
import ContentListContainer, { fadeDirection } from '../../components/contentList/contentListContainer'
import Error from '../../components/errorAnimation'
import Loading from '../../components/loading'
import FeaturedMovie from '../../components/featuredMovie'
import ContentLayout from '../../layouts/contentLayout'



const TvShowsScreen = () => {

    const { data: trendingTvShows, isError: trendingTvShowsError, isLoading: trendingTvShowsLoading } = useFetchTrendingTVShowsQuery({})
    const { data: popularTvShows, isError: popularTvShowsError, isLoading: popularTvShowsLoading } = useFetchPopularTVShowsQuery({})
    const { data: topRatedTvShows, isError: topRatedTvShowsError, isLoading: topRatedTvShowsLoading } = useFetchTopRatedTVShowsQuery({})
    const { data: onAirTvShows, isError: onAirTvShowsError, isLoading: onAirTvShowsLoading } = useFetchOnTheAirTVShowsQuery({})


    if (trendingTvShowsError || popularTvShowsError || topRatedTvShowsError || onAirTvShowsError) return <Error />
    else if (trendingTvShowsLoading || popularTvShowsLoading || topRatedTvShowsLoading || onAirTvShowsLoading) return <Loading />



    return (
        <View style={{ backgroundColor: colors.third, alignItems: 'center' }}>

            <ScrollView
                showsVerticalScrollIndicator={false}>
                <ContentLayout >
                    <Header activeScreen='Tv' />
                    <FeaturedMovie content={trendingTvShows.results[0]} activeContent='TV' />
                    <ContentListContainer title='On The Air ' content={onAirTvShows.results} fadeDirection={fadeDirection.FadeInLeft} delaytime={100} activeContent='TV' />
                    <ContentListContainer title='Trending' content={trendingTvShows.results} fadeDirection={fadeDirection.FadeInRight} delaytime={400} activeContent='TV' />
                    <ContentListContainer title='Popular' content={popularTvShows.results} fadeDirection={fadeDirection.FadeInRight} delaytime={900} activeContent='TV' />
                    <ContentListContainer title='Top Rated  ' content={topRatedTvShows.results} fadeDirection={fadeDirection.FadeInLeft} delaytime={100} activeContent='TV' />
                </ContentLayout>

            </ScrollView>
        </View >
    )
}

export default TvShowsScreen
