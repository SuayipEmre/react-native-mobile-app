import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MovieTypes } from '../../types/movie'
import Buttons from './buttons'
import styles from './styles'
import Animated, { FadeInRight } from 'react-native-reanimated'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MainNavigatorStackParamList } from '../../navigators/types'
import { TvShowsTypes } from '../../types/tvshows'



type FeaturedMoviePropsTypes = {
    content: MovieTypes | TvShowsTypes
    activeContent : 'Movie' | 'TV'
}

const FeaturedMovie: React.FC<FeaturedMoviePropsTypes> = ({ content, activeContent }) => {

    const navigation = useNavigation<NavigationProp<MainNavigatorStackParamList>>()

    
    
    const handleDetail = () => {
     
        navigation.navigate('MovieDetailsScreen',{
            content_id : content.id,
            content_title : content.title,
            activeContent,
        })
    }


    return (
        <Animated.View entering={FadeInRight.delay(100).delay(100).springify().damping(12)} style={styles.container}>


            <View style={styles.info_container}>
                <TouchableOpacity onPress={handleDetail}>
                    <Image source={{ uri: `${process.env.IMAGE_PATH}/${content?.backdrop_path }` }} style={styles.image} />
                </TouchableOpacity>

                <View style={styles.info_bottom_content}>
                    <Text style={[{ color: '#fff' }, styles.title]}>{content?.original_title}</Text>

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

