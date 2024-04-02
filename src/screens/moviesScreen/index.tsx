import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { useFetchPopularMoviesQuery, useFetchTopRatedMoviesQuery, useFetchTrendingMoviesQuery, useFetchUpComingMoviesQuery } from '../../Services/MoviesService'
import Loading from '../../components/loading'
import Error from '../../components/errorAnimation'
import { colors } from '../../styles/colors'
import ContentLayout from '../../layouts/contentLayout'
import Header from '../../components/header'
import FeaturedMovie from '../../components/featuredMovie'
import ContentListContainer, { fadeDirection } from '../../components/contentList/contentListContainer'
import { ActiveContent } from '../../types/activeContent'
import { useLanguage } from '../../store/features/language/hooks'
import { useTranslation } from 'react-i18next'

const MoviesScreen = () => {
    const language = useLanguage()
    const { data: trendingMovies, isError: isTrendingMoviesError, isLoading: isTrendingMoviesLoading } = useFetchTrendingMoviesQuery(language)
    const { data: popularMovies, isError: popularMoviesError, isLoading: popularMoviesLoading } = useFetchPopularMoviesQuery(language)
    const { data: topRatedMovies, isError: topRatedMoviesError, isLoading: topRatedMoviesLoading } = useFetchTopRatedMoviesQuery(language)
    const { data: upcomingMovies, isError: upComingMoviesError, isLoading: upComingMoviesLoading } = useFetchUpComingMoviesQuery(language)
    const {t} = useTranslation()


    if (isTrendingMoviesError || popularMoviesError || topRatedMoviesError || upComingMoviesError) return <Error />
    else if (isTrendingMoviesLoading || popularMoviesLoading || topRatedMoviesLoading || upComingMoviesLoading) return <Loading />

    const renderTrendingMovies = () => {
      if(isTrendingMoviesError) return <Text>{t('contentError')}</Text>
      else if (isTrendingMoviesLoading) return <ActivityIndicator />
      return  <ContentListContainer title={t('trending')} content={trendingMovies.results} fadeDirection={fadeDirection.FadeInLeft} delaytime={100} activeContent={ActiveContent.Movie} />
    }

    const renderPopularMovies = () => {
        if(popularMoviesError) return <Text>{t('contentError')}</Text>
        else if (popularMoviesLoading) return <ActivityIndicator />
        return <ContentListContainer title={t('popular')}content={popularMovies.results} fadeDirection={fadeDirection.FadeInRight} delaytime={400} activeContent={ActiveContent.Movie} />
      }

      const renderTopRatedMovies = () => {
        if(topRatedMoviesError) return <Text>{t('contentError')}</Text>
        else if (topRatedMoviesLoading) return <ActivityIndicator />
        return <ContentListContainer title={t('topRated')}content={topRatedMovies.results} fadeDirection={fadeDirection.FadeInRight} delaytime={900}  activeContent={ActiveContent.Movie}/>
      }

      const renderUpComingMovies = () => {
        if(upComingMoviesError) return <Text>{t('contentError')}</Text>
        else if (upComingMoviesLoading) return <ActivityIndicator />
        return  <ContentListContainer title={t('upcoming')} content={upcomingMovies.results} fadeDirection={fadeDirection.FadeInLeft} delaytime={100}  activeContent={ActiveContent.Movie}/>
      }



    return (
        <View style={{ backgroundColor: colors.third, alignItems: 'center' }}>

            <ScrollView
                showsVerticalScrollIndicator={false}>
                <ContentLayout >
                    <Header  activeContent={ActiveContent.Movie} />
                    <FeaturedMovie content={trendingMovies.results[0]}  activeContent={ActiveContent.Movie} />
                        {renderTrendingMovies()}
                        {renderPopularMovies()}
                        {renderTopRatedMovies()}
                        {renderUpComingMovies()}
                </ContentLayout>

            </ScrollView>
        </View >
    )
}

export default MoviesScreen
