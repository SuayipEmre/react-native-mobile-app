import { Dimensions, FlatList, Image, ListRenderItem, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { MovieTypes } from '../../types/movie'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MainNavigatorStackParamList } from '../../navigators/types'
import { TvShowsTypes } from '../../types/tvshows'


type MovieListPropsType = {
    content: Array<MovieTypes | TvShowsTypes>
}
const MovieList: React.FC<MovieListPropsType> = ({ content }) => {
    const navigation = useNavigation<NavigationProp<MainNavigatorStackParamList>>()

    

    const handleMovieDetail = (movie_id : number, movie_title:string) => {
      navigation.navigate('MovieDetailsScreen',{
        movie_id,
        movie_title,
      })
    }

     const renderMovies: ListRenderItem<MovieTypes> = ({ item }) => {

        return (
            <TouchableOpacity style={styles.container} onPress={() => handleMovieDetail(item.id, item.title)}>
               <Image source={{uri : `${process.env.IMAGE_PATH}/${item.poster_path}`}} style={styles.image} />
            </TouchableOpacity>
        )
    }

    return (
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={content}
                snapToAlignment='center'
                decelerationRate={'normal'}
                renderItem={renderMovies}
            />
    )
}

export default MovieList

const{width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
        margin : 5,
        borderRadius : 16,
    },
    title:{},
    image:{
        width : width * 0.3,
        height : height * 0.2,
        borderRadius : 16,
    },
})