import { FlatList, ListRenderItem, View } from 'react-native'
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
import NoMatchesText from '../../components/noMatchesText'
import { useLanguage } from '../../store/features/language/hooks'


type ProfileProps = NativeStackScreenProps<MainNavigatorStackParamList, 'ContentBySearchScreen'>

const ContentBySearchScreen: React.FC<ProfileProps> = ({ route }) => {

  const { value, activeContent } = route.params
  const language = useLanguage()

  const { data: moviesData, isLoading: moviesLoading, isError: moviesError } = useFetchMoviesBySearchQuery({ searchValue: value, language }, {
    skip: activeContent != ActiveContent.Movie
  })
  const { data: tvData, isLoading: tvLoading, isError: tvError } = useFetchTVShowsBySearchValueQuery({ searchValue: value, language }, {
    skip: activeContent != ActiveContent.TVShow
  })



  const renderMovies: ListRenderItem<MovieTypes | TvShowsTypes> = ({ item, index }) => <MovieCard contentItem={item} index={index} activeContent={activeContent} />



  const renderContent = () => {

    if (activeContent == ActiveContent.TVShow) {

      if (tvError) return <Error />
      else if (tvLoading) return <Loading />
      return <FlatList
        data={tvData.results}
        renderItem={renderMovies}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
      />
    } else {

      if (activeContent == ActiveContent.Movie) {
        if (moviesError) return <Error />
        else if (moviesLoading) return <Loading />

        return <FlatList
          data={moviesData.results}
          renderItem={renderMovies}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: 'center' }}
        />

      }
    }


  }



  return (
    <View style={{ backgroundColor: colors.third, flex: 1 }}>
      {
        activeContent == ActiveContent.Movie ?
          moviesData?.results?.length == 0 && <NoMatchesText searchValue={value} /> :
          tvData?.results?.length == 0 &&
          <NoMatchesText searchValue={value} />
      }
      {renderContent()}
    </View>
  )
}

export default ContentBySearchScreen

