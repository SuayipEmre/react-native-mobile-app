import { SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { colors } from '../../styles/colors'
import HomeScreenContainer from '../../containers/homeScreenContainer'
import {
  useFetchNowPlayingMoviesQuery,
  useFetchPopularMoviesQuery
  , useFetchTopRatedMoviesQuery,
  useFetchTrendingMoviesQuery,
  useFetchUpComingMoviesQuery
} from '../../store/features/APIs/movies'
import Error from '../../components/errorAnimation'
import Loading from '../../components/loading'
import { useActiveContent } from '../../store/features/activeContent/hooks'
import { useFetchPopularTVShowsQuery, useFetchTrendingTVShowsQuery } from '../../store/features/APIs/tvseries'
import MovieListContainer, { fadeDirection } from '../../components/movieList/movieListContainer'




const HomeScreen: React.FC = () => {

  const activeContent = useActiveContent()

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
