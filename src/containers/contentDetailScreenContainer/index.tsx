import { ActivityIndicator, Dimensions, Image, ListRenderItem, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { MovieTypes } from '../../types/movie'
import { useFetchMovieVideosQuery, useFetchSimilarMoviesQuery } from '../../Services/MoviesService'
import { FlatList } from 'react-native'
import { MainNavigatorStackParamList } from '../../navigators/types'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MovieDetailsTypes } from '../../types/movieDetail'
import { TvShowsTypes } from '../../types/tvshows'
import TVShowDetails from '../../components/contentDetails/tvShowDetails'
import { TVShowDetailsTypes } from '../../types/tvShowDetails'
import { ActiveContent } from '../../types/activeContent'
import { MovieDetails } from '../../components/contentDetails/movieDetails'
import { useFetchSimilarTVShowsQuery, useFetchTVShowVideosQuery } from '../../Services/TvSeriesService'
import ContentVideos from '../../components/contentDetails/videos'
import styles from './styles'
import { useLanguage } from '../../store/features/language/hooks'

type ContentDetailScreenContainerPropsType = {
  movie: MovieDetailsTypes,
  tvShow: TVShowDetailsTypes,
  activeContent: ActiveContent,
  contentID: number

}

const ContentDetailScreenContainer: React.FC<ContentDetailScreenContainerPropsType> = ({ movie, activeContent, tvShow, contentID }) => {
  const [preferredContent, setPreferredContent] = useState<'similar' | 'trailers'>('similar')

  const listRef = useRef<FlatList>(null)

  const language = useLanguage()
  const navigation = useNavigation<NavigationProp<MainNavigatorStackParamList>>()

  const { data: movieSimilarContent, isLoading: movieSimilarLoading, isError: movieSimilarError } = useFetchSimilarMoviesQuery({id : contentID, language}, {
    skip: activeContent != ActiveContent.Movie
  })

  const { data: movieVideos, isLoading: movieVideosLoading, isError: movieVideosError } = useFetchMovieVideosQuery(
   {id :  activeContent == ActiveContent.Movie ? movie.id : null, language}, {
    skip: activeContent != ActiveContent.Movie
  })


  const { data: tvSimilarContent, isLoading: tvSimilarLoading, isError: tvSimilarError } = useFetchSimilarTVShowsQuery(contentID, {
    skip: activeContent != ActiveContent.TVShow
  })

  const { data: tvVideos, isLoading: tvVideosLoading, isError: tvVideosError } = useFetchTVShowVideosQuery(
    activeContent == ActiveContent.TVShow ? tvShow.id : null, {
    skip: activeContent != ActiveContent.TVShow
  })






  const handleMovieDetail = (movie_id: number, movie_title: string) => {
    navigation.navigate('ContentDetailsScreen', {
      content_id: movie_id,
      content_title: movie_title,
      activeContent,
    })
    scrollTopHandler()
  }


  const scrollTopHandler = () => {
    if (listRef.current) {
      listRef.current.scrollToOffset({ offset: 0, animated: true })
    }
  }

  const renderMovies: ListRenderItem<MovieTypes | TvShowsTypes> = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.button} onPress={() => handleMovieDetail(item.id, item.title)}  >
        <Image source={{ uri: `${process.env.IMAGE_PATH}/${item.poster_path}` }}
          style={styles.image}
        />
      </TouchableOpacity>
    )
  }

  

  const determineSimilarContent = () => {
    if (activeContent == ActiveContent.Movie) return movieSimilarLoading || movieSimilarError ? [] : movieSimilarContent.results
    return tvSimilarLoading || tvSimilarError ? [] : tvSimilarContent.results
  }

  const determineContentVideos =  () => {
    if (activeContent == ActiveContent.Movie) return movieVideosLoading || movieVideosError ? [] : movieVideos.results
    return tvVideosLoading || tvVideosError ? [] : tvVideos.results
  }

  const determineContentDetail = () => {
    if (activeContent == ActiveContent.Movie) return <MovieDetails movie={movie} preferredContent={preferredContent} setPreferredContent={setPreferredContent} />
    return <TVShowDetails tvShow={tvShow} preferredContent={preferredContent} setPreferredContent={setPreferredContent} />
  }

 

  return (
    <>

      {
         /*The details is  on the header of the flat list.   */
        preferredContent == 'similar' ? 
          <FlatList
            ref={listRef}
            data={determineSimilarContent()}
            renderItem={renderMovies}
            ListHeaderComponent={determineContentDetail()}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            snapToAlignment='center'
            decelerationRate={'normal'}
            contentContainerStyle={{ alignItems: 'center' }}
          />
        : 
          <ScrollView showsVerticalScrollIndicator={false}>
            {determineContentDetail()}
            <ContentVideos videos={determineContentVideos()} />
          </ScrollView>
        
      }
    </>
  )
}

export default ContentDetailScreenContainer

