import {  SafeAreaView, ScrollView, View } from 'react-native'
import React from 'react'
import { colors } from '../../styles/colors'
import Header from '../../components/header'
import ContentListContainer, { fadeDirection } from '../../components/contentList/contentListContainer'
import Error from '../../components/errorAnimation'
import Loading from '../../components/loading'
import FeaturedMovie from '../../components/featuredMovie'
import ContentLayout from '../../layouts/contentLayout'
import { ActiveContent } from '../../types/activeContent'
import { useFetchOnTheAirTVShowsQuery, useFetchPopularTVShowsQuery, useFetchTopRatedTVShowsQuery, useFetchTrendingTVShowsQuery } from '../../Services/TvSeriesService'
import { useLanguage } from '../../store/features/language/hooks'



const TvShowsScreen = () => {

    const language = useLanguage()
    const { data: trendingTvShows, isError: trendingTvShowsError, isLoading: trendingTvShowsLoading } = useFetchTrendingTVShowsQuery(language)
    const { data: popularTvShows, isError: popularTvShowsError, isLoading: popularTvShowsLoading } = useFetchPopularTVShowsQuery(language)
    const { data: topRatedTvShows, isError: topRatedTvShowsError, isLoading: topRatedTvShowsLoading } = useFetchTopRatedTVShowsQuery(language)
    const { data: onAirTvShows, isError: onAirTvShowsError, isLoading: onAirTvShowsLoading } = useFetchOnTheAirTVShowsQuery(language)


    if (trendingTvShowsError || popularTvShowsError || topRatedTvShowsError || onAirTvShowsError) return <Error />
    else if (trendingTvShowsLoading || popularTvShowsLoading || topRatedTvShowsLoading || onAirTvShowsLoading) return <Loading />



    return (
        <SafeAreaView style={{ backgroundColor: colors.third, alignItems: 'center' }}>

            <ScrollView
                showsVerticalScrollIndicator={false}>
                <ContentLayout >
                    <Header activeContent={ActiveContent.TVShow} />
                    <FeaturedMovie content={trendingTvShows.results[0]} activeContent={ActiveContent.TVShow} />
                    <ContentListContainer title='On The Air ' content={onAirTvShows.results} fadeDirection={fadeDirection.FadeInLeft} delaytime={100} activeContent={ActiveContent.TVShow} />
                    <ContentListContainer title='Trending' content={trendingTvShows.results} fadeDirection={fadeDirection.FadeInRight} delaytime={400} activeContent={ActiveContent.TVShow} />
                    <ContentListContainer title='Popular' content={popularTvShows.results} fadeDirection={fadeDirection.FadeInRight} delaytime={900} activeContent={ActiveContent.TVShow} />
                    <ContentListContainer title='Top Rated  ' content={topRatedTvShows.results} fadeDirection={fadeDirection.FadeInLeft} delaytime={100} activeContent={ActiveContent.TVShow} />
                </ContentLayout>

            </ScrollView>
        </SafeAreaView >
    )
}

export default TvShowsScreen
