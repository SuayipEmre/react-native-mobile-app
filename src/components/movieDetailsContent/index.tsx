import { Text, TouchableOpacity } from "react-native"
import { Image, View } from "react-native"
import Entypo from 'react-native-vector-icons/Entypo'
import Ant from 'react-native-vector-icons/AntDesign'
import { colors } from "../../styles/colors"
import { movieDetailsTypes } from "../../types/movie"
import styles from "./styles"

type MovieDetailsContentPropsType = {
    movie: movieDetailsTypes,
    year: string
}

export const MovieDetailsContent: React.FC<MovieDetailsContentPropsType> = ({ movie, year }) => {

    return (
        <>
            <View style={styles.image_container}>
                <Image source={{ uri: `${process.env.IMAGE_PATH}/${movie.backdrop_path}` }} style={styles.image} />
            </View>

            <View style={styles.body}>

                <Text style={styles.title}>{movie.original_title}</Text>

                <View style={styles.top_content} >
                    <Text style={styles.release_year}>{year}</Text>
                    <Text style={styles.tagline}>{movie.tagline}</Text>
                </View>

                <View style={styles.button}>

                    <Entypo name="controller-play" size={28} color={colors.third} />
                    <Text style={styles.play_text}>Play</Text>
                </View>

                <Text style={styles.overview}>{movie.overview}</Text>

                <View style={styles.bottom_content}>


                    <TouchableOpacity style={styles.bottom_content_button}>
                        <Entypo name="plus" size={24} color={colors.primary} />
                        <Text style={styles.bottom_content_text}>My List</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bottom_content_button}>
                        <Ant name="like2" size={24} color={colors.primary} />
                        <Text style={styles.bottom_content_text}>Rate</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bottom_content_button}>
                        <Entypo name="share" size={24} color={colors.primary} />
                        <Text style={styles.bottom_content_text}>Share</Text>
                    </TouchableOpacity>


                </View>

            </View>
            <View style={styles.border} />

            <Text style={styles.similar_text}>Similar</Text>

        </>
    )
}
