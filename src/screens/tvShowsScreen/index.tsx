import { ActivityIndicator, SafeAreaView, ScrollView, Text } from 'react-native'
import React from 'react'
import { colors } from '../../styles/colors'
import Header from '../../components/header'
import ContentListContainer, { fadeDirection } from '../../components/contentList/contentListContainer'
import Error from '../../components/errorAnimation'
import Loading from '../../components/loading'
import FeaturedMovie from '../../components/featuredMovie'
import ContentLayout from '../../layouts/contentLayout'
import { ActiveContent } from '../../types/activeContent'
import {
    useFetchOnTheAirTVShowsQuery,
    useFetchPopularTVShowsQuery,
    useFetchTopRatedTVShowsQuery,
    useFetchTrendingTVShowsQuery
} from '../../Services/TvSeriesService'
import { useLanguage } from '../../store/features/language/hooks'
import { useTranslation } from 'react-i18next'



const TvShowsScreen = () => {
    const { t } = useTranslation()
    const language = useLanguage()
    const { data: trendingTvShows, isError: trendingTvShowsError, isLoading: trendingTvShowsLoading } = useFetchTrendingTVShowsQuery(language)
    const { data: popularTvShows, isError: popularTvShowsError, isLoading: popularTvShowsLoading } = useFetchPopularTVShowsQuery(language)
    const { data: topRatedTvShows, isError: topRatedTvShowsError, isLoading: topRatedTvShowsLoading } = useFetchTopRatedTVShowsQuery(language)
    const { data: onAirTvShows, isError: onAirTvShowsError, isLoading: onAirTvShowsLoading } = useFetchOnTheAirTVShowsQuery(language)



    const renderOnTheAirTV = () => {
        if (onAirTvShowsError) return <Text>{t('contentError')}</Text>
        else if (onAirTvShowsLoading) return <ActivityIndicator />
        return <ContentListContainer title={t('onTheAir')} content={onAirTvShows.results} fadeDirection={fadeDirection.FadeInLeft} delaytime={100} activeContent={ActiveContent.TVShow} />
    }

    const renderTrendingTV = () => {
        if (trendingTvShowsError) return <Text>{t('contentError')}</Text>
        else if (trendingTvShowsLoading) return <ActivityIndicator />
        return <ContentListContainer title={t('trendTv')} content={trendingTvShows.results} fadeDirection={fadeDirection.FadeInRight} delaytime={900} activeContent={ActiveContent.TVShow} />
    }

    const renderPopularTV = () => {
        if (popularTvShowsError) return <Text>{t('contentError')}</Text>
        else if (popularTvShowsLoading) return <ActivityIndicator />
        return <ContentListContainer title={t('popular')} content={popularTvShows.results} fadeDirection={fadeDirection.FadeInRight} delaytime={900} activeContent={ActiveContent.TVShow} />
    }
    const renderTopRatedTV = () => {
        if (topRatedTvShowsError) return <Text>{t('contentError')}</Text>
        else if (topRatedTvShowsLoading) return <ActivityIndicator />
        return <ContentListContainer title={t('topRated')} content={topRatedTvShows.results} fadeDirection={fadeDirection.FadeInLeft} delaytime={100} activeContent={ActiveContent.TVShow} />
    }





    return (
        <SafeAreaView style={{ backgroundColor: colors.third, alignItems: 'center' }}>

            <ScrollView
                showsVerticalScrollIndicator={false}>
                <ContentLayout >
                    <Header activeContent={ActiveContent.TVShow} />
                    <FeaturedMovie content={trendingTvShows.results[0]} activeContent={ActiveContent.TVShow} />
                    {renderOnTheAirTV()}
                    {renderTrendingTV()}
                    {renderPopularTV()}
                    {renderTopRatedTV()}
                </ContentLayout>

            </ScrollView>
        </SafeAreaView >
    )
}

export default TvShowsScreen
