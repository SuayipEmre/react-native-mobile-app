import { Dimensions, FlatList, Image, ListRenderItem, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { MovieTypes } from '../../types/movie'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { HomeNavigatorStackParamList } from '../../navigators/types'


type MovieListPropsType = {
    movies: Array<MovieTypes>
}
const MovieList: React.FC<MovieListPropsType> = ({ movies }) => {
    const navigation = useNavigation<NavigationProp<HomeNavigatorStackParamList>>()


    const handleMovieDetail = (movie_id : number) => {
      navigation.navigate('MovieDetailsScreen',{
        movie_id,
      })
    }

     const renderMovies: ListRenderItem<MovieTypes> = ({ item }) => {

        return (
            <TouchableOpacity style={styles.container} onPress={() => handleMovieDetail(item.id)}>
               <Image source={{uri : `${process.env.IMAGE_PATH}/${item.poster_path}`}} style={styles.image} />
            </TouchableOpacity>
        )
    }

    return (
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={movies}
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