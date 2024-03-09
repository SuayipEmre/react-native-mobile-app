import { ActivityIndicator, Dimensions, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MovieTypes } from '../../types/movie'
import { useFetchSimilarMoviesQuery } from '../../store/features/APIs/movies'
import { FlatList } from 'react-native'
import { MovieDetailsContent } from '../../components/contentDetails/movieDetailsContent'
import { MainNavigatorStackParamList } from '../../navigators/types'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { movieDetailsTypes } from '../../types/movieDetail'
import { TvShowsTypes } from '../../types/tvshows'
import TVShowDetails from '../../components/contentDetails/tvShowDetails'
import { TVShowDetailsTypes } from '../../types/tvShowDetails'
import { useFetchSimilarTVShowsQuery } from '../../store/features/APIs/tvseries'
import { ActiveContent } from '../../types/activeContent'

type MovieDetailScreenContainerPropsType = {
  movie: movieDetailsTypes,
  tvShow: TVShowDetailsTypes,
  activeContent: ActiveContent,
  contentID: number

}

const MovieDetailScreenContainer: React.FC<MovieDetailScreenContainerPropsType> = ({ movie, activeContent, tvShow, contentID }) => {

  console.log('MovieDetailScreenContainer : ',   activeContent);

  const navigation = useNavigation<NavigationProp<MainNavigatorStackParamList>>()

  const { data: movieSimilarContent, isLoading: movieSimilarLoading, isError: movieSimilarError } = useFetchSimilarMoviesQuery(contentID, {
    skip: activeContent != ActiveContent.Movie
  })

  const { data: tvSimilarContent, isLoading: tvSimilarLoading, isError: tvSimilarError } = useFetchSimilarTVShowsQuery(contentID, {
    skip: activeContent != ActiveContent.TVShow
  })





  const handleMovieDetail = (movie_id: number, movie_title: string) => {
    navigation.navigate('MovieDetailsScreen', {
      content_id: movie_id,
      content_title: movie_title,
      activeContent,
    })
  }


  const renderMovies: ListRenderItem<MovieTypes | TvShowsTypes> = ({ item }) => {



    if (activeContent == ActiveContent.Movie) {
      if (movieSimilarError) return <Text>Err</Text>
      else if (movieSimilarLoading) return <ActivityIndicator />

    } else if (activeContent == ActiveContent.TVShow) {
      if (tvSimilarError) return <Text>Err</Text>
      else if (tvSimilarLoading) return <ActivityIndicator />
    }

    return (
      <TouchableOpacity
        style={styles.button} onPress={() => handleMovieDetail(item.id, item.title)}  >
        <Image source={{ uri: `${process.env.IMAGE_PATH}/${item.poster_path}` }}
          style={styles.image}
        />
      </TouchableOpacity>
    )
  }


  /*The details is  on the header of the flat list.   */

  return (
    <View>
      <FlatList
        data={
          activeContent == ActiveContent.Movie ? (movieSimilarLoading || movieSimilarError ? [] : movieSimilarContent.results) : tvSimilarLoading || tvSimilarError ? [] : tvSimilarContent.results
        }
        renderItem={renderMovies}
        ListHeaderComponent={activeContent == ActiveContent.Movie ? <MovieDetailsContent movie={movie} /> : <TVShowDetails tvShow={tvShow} />}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        snapToAlignment='center'
        decelerationRate={'normal'}
        contentContainerStyle={{ alignItems: 'center' }}
      />
    </View>
  )
}

export default MovieDetailScreenContainer


const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  button: {
    width: width * 0.3,
    height: height * 0.2,
    margin: 5,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    resizeMode: 'stretch'
  },

})