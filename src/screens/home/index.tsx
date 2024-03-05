import {  SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { colors } from '../../styles/colors'
import HomeScreenContainer from '../../containers/homeScreenContainer'
import {
  useFetchNowPlayingMoviesQuery,
  useFetchPopularMoviesQuery
  , useFetchTopRatedMoviesQuery,
  useFetchUpComingMoviesQuery
} from '../../store/features/APIs/movies'
import Error from '../../components/errorAnimation'
import Loading from '../../components/loading'




const HomeScreen : React.FC = () => {



  const { data: popularMovies, isLoading: isPopularMoviesLoading, isError: isPopularMoviesError } = useFetchPopularMoviesQuery({})
  const { data: topRated, isLoading: isTopRatedLoading, isError: isTopRatedError } = useFetchTopRatedMoviesQuery({})
  const { data: nowPlaying, isLoading: isNowPlayingLoading, isError: isNowPlayingError } = useFetchNowPlayingMoviesQuery({})
  const { data: upComing, isLoading: isUpComingLoading, isError: isUpComingError } = useFetchUpComingMoviesQuery({})





  if (isPopularMoviesError || isTopRatedError || isNowPlayingError || isUpComingError) return <Error />
  else if (isPopularMoviesLoading || isTopRatedLoading || isNowPlayingLoading || isUpComingLoading) return  <Loading />

  return (
    <SafeAreaView style={{backgroundColor: colors.third,flex: 1,}}>
      <StatusBar barStyle={ 'light-content'} />
      <HomeScreenContainer popularMovies={popularMovies.results} topRated={topRated.results} nowPlaying={nowPlaying.results} upComing={upComing.results} />
    </SafeAreaView>
  )
}

export default HomeScreen
