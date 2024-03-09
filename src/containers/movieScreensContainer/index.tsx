import { FlatList, ListRenderItem, View } from 'react-native'
import React from 'react'
import { MovieTypes } from '../../types/movie'
import MovieCard from '../../components/movieCard'

type moviesScreenContainerProps = {
    movie : Array<MovieTypes> | [],
}
const MovieScreensContainer : React.FC<moviesScreenContainerProps> = ({movie = []}) => {



    const renderMovies: ListRenderItem<MovieTypes> = ({ item, index }) => <MovieCard movieItem={item} index={index} activeContent='Movie' />
  
    return (
    <View>
      <FlatList 
        data={movie}
        renderItem={renderMovies}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{alignItems:'center'}}
    
        />
    </View>
  )
}

export default MovieScreensContainer
