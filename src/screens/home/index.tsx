import { SafeAreaView, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '../../styles/colors'
import HomeScreenContainer from '../../containers/homeScreenContainer'
import {
  useFetchPopularMoviesQuery,
  useFetchTrendingMoviesQuery,
} from '../../store/features/APIs/movies'
import Error from '../../components/errorAnimation'
import Loading from '../../components/loading'
import { useFetchPopularTVShowsQuery, useFetchTrendingTVShowsQuery } from '../../store/features/APIs/tvseries'
import { setActiveContent } from '../../store/features/activeContent/actions'




const HomeScreen: React.FC = () => {

  useEffect(() => {
    setActiveContent(null)
  },[])

  const { data: trendingMovies, isLoading: isTrendingMoviesLoading, isError: isTrendingMoviesError } = useFetchTrendingMoviesQuery({})
  const { data: trendingTVShows, isLoading: isTrendingTVShowsLoading, isError: isTrendingTVShowsError } = useFetchTrendingTVShowsQuery({})
  const { data: popularMovies, isLoading: isPopularMoviesLoading, isError: isPopularMoviesError } = useFetchPopularMoviesQuery({})
  const { data: popularTVShows, isLoading: isTVShowsLoading, isError: isTVShowsError } = useFetchPopularTVShowsQuery({})




  if (isPopularMoviesError || isTrendingTVShowsError || isTVShowsError  || isTrendingMoviesError) return <Error />
  else if (isPopularMoviesLoading || isTrendingTVShowsLoading || isTVShowsLoading || isTrendingMoviesLoading) return <Loading />

  return (
    <SafeAreaView style={{ backgroundColor: colors.third, flex: 1, }}>
      <StatusBar barStyle={'light-content'} />

      <HomeScreenContainer  trendingMovies={trendingMovies.results}  trendingTVShows={trendingTVShows.results} popularMovies={popularMovies.results}  popularTVShows={popularTVShows.results}  />


    </SafeAreaView>
  )
}

export default HomeScreen
