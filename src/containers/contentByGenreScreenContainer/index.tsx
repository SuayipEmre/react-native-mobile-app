import { FlatList, ListRenderItem, View } from 'react-native'
import React from 'react'
import { MovieTypes } from '../../types/movie'
import MovieCard from '../../components/movieCard'
import { ActiveContent } from '../../types/activeContent'
import { TvShowsTypes } from '../../types/tvshows'

type moviesScreenContainerProps = {
    content : [MovieTypes] | [ TvShowsTypes],
    activeContent : ActiveContent
}
const ContentByGenreScreenContainer : React.FC<moviesScreenContainerProps> = ({content = [], activeContent}) => {



    const renderMovies: ListRenderItem<MovieTypes> = ({ item, index }) => <MovieCard contentItem={item} index={index} activeContent={activeContent} />
  
    return (
    <View>
      <FlatList 
        data={content}
        renderItem={renderMovies}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{alignItems:'center'}}
    
        />
    </View>
  )
}

export default ContentByGenreScreenContainer
