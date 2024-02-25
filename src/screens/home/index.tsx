import { Text, ActivityIndicator, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { useCurrentTheme } from '../../store/features/theme/hooks'
import { colors } from '../../styles/colors'
import HomeScreenContainer from '../../containers/homeScreenContainer'
import {
  useFetchNowPlayingMoviesQuery,
  useFetchPopularMoviesQuery
  , useFetchTopRatedMoviesQuery,
  useFetchUpComingMoviesQuery
} from '../../store/features/APIs/movies'


const HomeScreen = () => {


  const { data: popularMovies, isLoading: isPopularMoviesLoading, isError: isPopularMoviesError } = useFetchPopularMoviesQuery({})
  const { data: topRated, isLoading: isTopRatedLoading, isError: isTopRatedError } = useFetchTopRatedMoviesQuery({})
  const { data: nowPlaying, isLoading: isNowPlayingLoading, isError: isNowPlayingError } = useFetchNowPlayingMoviesQuery({})
  const { data: upComing, isLoading: isUpComingLoading, isError: isUpComingError } = useFetchUpComingMoviesQuery({})


  const currentTheme = useCurrentTheme()
  const {third} = colors[currentTheme]



  if (isPopularMoviesError || isTopRatedError || isNowPlayingError || isUpComingError) return <Text></Text>
  else if (isPopularMoviesLoading || isTopRatedLoading || isNowPlayingLoading || isUpComingLoading) return <ActivityIndicator />

  return (
    <SafeAreaView style={{backgroundColor: third,flex: 1,}}>
      <StatusBar barStyle={currentTheme == 'darkTheme' ? 'light-content' : 'dark-content'} />
      <HomeScreenContainer popularMovies={popularMovies.results} topRated={topRated.results} nowPlaying={nowPlaying.results} upComing={upComing.results} />
    </SafeAreaView>
  )
}

export default HomeScreen
