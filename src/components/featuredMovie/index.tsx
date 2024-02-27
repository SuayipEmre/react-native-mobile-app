import { Image,  Text, View } from 'react-native'
import React from 'react'
import { MovieTypes } from '../../types/movie'
import Buttons from './buttons'
import styles from './styles'
import Animated, { FadeInRight } from 'react-native-reanimated'


type FeaturedMoviePropsTypes = {
    movie: MovieTypes
}

const FeaturedMovie: React.FC<FeaturedMoviePropsTypes> = ({ movie }) => {

    return (
        <Animated.View entering={FadeInRight.delay(100).delay(100).springify().damping(12)} style={styles.container}>


            <View style={styles.info_container}>
                <Image source={{ uri: `${process.env.IMAGE_PATH}/${movie.backdrop_path}` }} style={styles.image} />

                <View style={styles.info_bottom_content}>
                    <Text style={[{ color: '#fff' }, styles.title]}>{movie.original_title}</Text>
                    
                    <View style={styles.top_text_container}>
                        <Text style={styles.top_text}>TOP 10!</Text>
                    </View>
                    
                    
                    <Buttons />
                </View>
            </View>


        </Animated.View>
    )
}

export default FeaturedMovie

