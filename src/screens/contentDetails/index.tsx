import { StyleSheet, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainNavigatorStackParamList } from '../../navigators/types'
import { colors } from '../../styles/colors'
import { useFetchMovieDetailsQuery } from '../../Services/MoviesService'
import Error from '../../components/errorAnimation'
import Loading from '../../components/loading'
import { ActiveContent } from '../../types/activeContent'
import ContentDetailScreenContainer from '../../containers/contentDetailScreenContainer'
import { useFetchTVShowsDetailsQuery } from '../../Services/TvSeriesService'


type ProfileProps = NativeStackScreenProps<MainNavigatorStackParamList, 'ContentDetailsScreen'>


const ContentDetailsScreen: React.FC<ProfileProps> = ({ route }) => {


  const { content_id, activeContent } = route.params


  const { data: movieData, isLoading: movieLoading, isError: movieError } = useFetchMovieDetailsQuery(content_id, {
    skip: activeContent != ActiveContent.Movie
  })
  const { data: tvData, isLoading: tvLoading, isError: tvError, error } = useFetchTVShowsDetailsQuery(content_id, {
    skip: activeContent != ActiveContent.TVShow
  })





  if (activeContent == ActiveContent.Movie) {
    if (movieError) return <Error />
    else if (movieLoading) return <Loading />


  } else {

    if (tvError) return <Error />
    else if (tvLoading) return <Loading />
  }


  return (
    <View style={styles.container}>
      <ContentDetailScreenContainer
        movie={movieData}
        tvShow={tvData}
        activeContent={activeContent}
        contentID={activeContent == ActiveContent.Movie ? movieData.id : tvData.id}
      />
    </View>
  )
}

export default ContentDetailsScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.third,
    flex: 1,
  }
})