import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MovieTypes } from '../../types/movie'
import { useCurrentTheme } from '../../store/features/theme/hooks'
import { colors } from '../../styles/colors'
import Buttons from './buttons'
import styles from './styles'


type FeaturedMoviePropsTypes = {
    movie: MovieTypes
}

const FeaturedMovie: React.FC<FeaturedMoviePropsTypes> = ({ movie }) => {
    const currentTheme = useCurrentTheme()
    const { primary, secondary, third } = colors[currentTheme]

    const imagePath = 'https://image.tmdb.org/t/p/original'
    return (
        <View style={[{}, styles.container]}>


            <View style={styles.info_container}>
                <Image source={{ uri: `${imagePath}/${movie.backdrop_path}` }} style={styles.image} />

                <View style={styles.info_bottom_content}>
                    <Text style={[{ color: '#fff' }, styles.title]}>{movie.original_title}</Text>
                    
                    <View style={styles.top_text_container}>
                        <Text style={[{color : primary},styles.top_text]}>TOP 10!</Text>
                    </View>
                    
                    
                    <Buttons />
                </View>
            </View>


        </View>
    )
}

export default FeaturedMovie

