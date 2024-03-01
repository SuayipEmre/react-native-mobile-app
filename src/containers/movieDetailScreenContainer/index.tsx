import { Dimensions, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MovieTypes, movieDetailsTypes } from '../../types/movie'
import { useFetchSimilarMoviesQuery } from '../../store/features/APIs/movies'
import { FlatList } from 'react-native'
import { MovieDetailsContent } from '../../components/movieDetailsContent'
import { MainNavigatorStackParamList } from '../../navigators/types'
import { NavigationProp, useNavigation } from '@react-navigation/native'

type MovieDetailScreenContainerPropsType = {
  movie: movieDetailsTypes,

}

const MovieDetailScreenContainer: React.FC<MovieDetailScreenContainerPropsType> = ({ movie }) => {

  const navigation = useNavigation<NavigationProp<MainNavigatorStackParamList>>()
  const { data, isLoading, isError } = useFetchSimilarMoviesQuery(movie.id)

  const getYear: string[] = movie.release_date.split("-");
  const year: string = getYear[0];




  const handleMovieDetail = (movie_id: number) => {
    navigation.navigate('MovieDetailsScreen', {
      movie_id,
    })
  }


  const renderMovies: ListRenderItem<MovieTypes> = ({ item }) => {
    if (isError) return <Text>Err</Text>
    else if (isLoading) return <Text>Loading</Text>

    return (
      <TouchableOpacity
        style={styles.button} onPress={() => handleMovieDetail(item.id)}  >
        <Image source={{ uri: `${process.env.IMAGE_PATH}/${item.poster_path}` }}
          style={styles.image}
        />
      </TouchableOpacity>
    )
  }



  return (
    <View>
      <FlatList
        data={isError || isLoading ? [] : data.results}
        renderItem={renderMovies}
        ListHeaderComponent={<MovieDetailsContent movie={movie} year={year} />}
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