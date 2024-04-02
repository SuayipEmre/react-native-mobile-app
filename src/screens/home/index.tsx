import { ActivityIndicator, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '../../styles/colors'
import HomeScreenContainer from '../../containers/homeScreenContainer'
import {
  useFetchPopularMoviesQuery,
  useFetchTrendingMoviesQuery,
} from '../../Services/MoviesService'
import { setActiveContent } from '../../store/features/activeContent/actions'
import { useFetchPopularTVShowsQuery, useFetchTrendingTVShowsQuery } from '../../Services/TvSeriesService'
import { useLanguage } from '../../store/features/language/hooks'
import { Text } from 'react-native-svg'
import ContentListContainer, { fadeDirection } from '../../components/contentList/contentListContainer'
import { ActiveContent } from '../../types/activeContent'
import { useTranslation } from 'react-i18next'




const HomeScreen: React.FC = () => {

  useEffect(() => {
    setActiveContent(null)
  }, [])
  const language = useLanguage()

  const { t } = useTranslation()

  const { data: trendingMovies, isLoading: isTrendingMoviesLoading, isError: isTrendingMoviesError } = useFetchTrendingMoviesQuery(language)
  const { data: trendingTVShows, isLoading: isTrendingTVShowsLoading, isError: isTrendingTVShowsError } = useFetchTrendingTVShowsQuery(language)
  const { data: popularMovies, isLoading: isPopularMoviesLoading, isError: isPopularMoviesError } = useFetchPopularMoviesQuery(language)
  const { data: popularTVShows, isLoading: isPopularTVShowsLoading, isError: isPopularTVShowsError } = useFetchPopularTVShowsQuery(language)







  const renderTrendingMovies = () => {
    if (isTrendingMoviesError) return <Text>{t('contentError')}</Text>
    else if (isTrendingMoviesLoading) return <ActivityIndicator />
    return <ContentListContainer title={t('trendMovies')} content={trendingMovies.results} fadeDirection={fadeDirection.FadeInRight} delaytime={400} activeContent={ActiveContent.Movie} />
  }


  const renderTrendingTV = () => {
    if (isTrendingTVShowsError) return<Text>{t('contentError')}</Text>
    else if (isTrendingTVShowsLoading) return <ActivityIndicator />
    return <ContentListContainer title={t('trendTv')} content={trendingTVShows.results} fadeDirection={fadeDirection.FadeInRight} delaytime={900} activeContent={ActiveContent.TVShow} />
  }

  const renderPopularMovies = () => {
    if (isPopularMoviesError) return <Text>{t('contentError')}</Text>
    else if (isPopularMoviesLoading) return <ActivityIndicator />
    return <ContentListContainer title={t('popularMovies')} content={popularMovies.results} fadeDirection={fadeDirection.FadeInLeft} delaytime={100} activeContent={ActiveContent.Movie} />
  }

  const renderPopularTV = () => {
    if (isPopularTVShowsError) return <Text>{t('contentError')}</Text>
    else if (isPopularTVShowsLoading) return <ActivityIndicator />
    return <ContentListContainer title={t('popularTv')} content={popularTVShows.results} fadeDirection={fadeDirection.FadeInLeft} delaytime={600} activeContent={ActiveContent.TVShow} />
  }




  return (
    <SafeAreaView style={{ backgroundColor: colors.third, flex: 1, }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 16, alignItems: 'center', paddingBottom: 30 }}
      >


        <StatusBar barStyle={'light-content'} />

        <HomeScreenContainer trendingMovies={trendingMovies?.results[0]}>

          {renderTrendingMovies()}
          {renderTrendingTV()}
          {renderPopularMovies()}
          {renderPopularTV()}
        </HomeScreenContainer>


      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen
