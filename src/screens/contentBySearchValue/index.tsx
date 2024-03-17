import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useFetchMoviesBySearchQuery } from '../../Services/MoviesService'
import { useFetchTVShowsBySearchValueQuery } from '../../Services/TvSeriesService'
import { colors } from '../../styles/colors'
import { MainNavigatorStackParamList } from '../../navigators/types'
import Error from '../../components/errorAnimation'
import Loading from '../../components/loading'
import { MovieTypes } from '../../types/movie'
import { TvShowsTypes } from '../../types/tvshows'
import MovieCard from '../../components/movieCard'
import { ActiveContent } from '../../types/activeContent'


type ProfileProps = NativeStackScreenProps<MainNavigatorStackParamList, 'ContentBySearchScreen'>

const ContentBySearchScreen: React.FC<ProfileProps> = ({ route }) => {

  const { value, activeContent } = route.params


  const { data: moviesData, isLoading: moviesLoading, isError: moviesError } = useFetchMoviesBySearchQuery(value, {
    skip: activeContent != ActiveContent.Movie
  })
  const { data: tvData, isLoading: tvLoading, isError: tvError } = useFetchTVShowsBySearchValueQuery(value, {
    skip: activeContent != ActiveContent.TVShow
  })



  const renderMovies: ListRenderItem<MovieTypes | TvShowsTypes> = ({ item, index }) => <MovieCard contentItem={item} index={index} activeContent={activeContent} />


  if (activeContent == ActiveContent.TVShow) {
    if (tvError) return <Error />
    else if (tvLoading) return <Loading />
  }
  else if (activeContent == ActiveContent.Movie) {
    if (moviesError) return <Error />
    else if (moviesLoading) return <Loading />
  }






  return (
    <View style={styles.container}>
      {
        activeContent == ActiveContent.Movie ?
          moviesData.results.length == 0 &&
          <Text style={styles.no_matches_text}>No results for {value}</Text> :
          tvData.results.length == 0 &&
          <Text style={styles.no_matches_text}>No results for {value}</Text>
      }
      <FlatList
        data={activeContent == ActiveContent.TVShow ? tvData.results : moviesData.results}
        renderItem={renderMovies}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
      />

    </View>
  )
}

export default ContentBySearchScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.third,
    flex: 1,
  },
  no_matches_text: {
    color: colors.secondary,
    alignSelf: 'center',
    marginVertical: 15,
  },
})