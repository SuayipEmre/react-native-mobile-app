import { Text, TouchableOpacity } from "react-native"
import { Image, View } from "react-native"
import styles from "../styles"
import { MovieDetailsTypes } from "../../../types/movieDetail"
import ContentDetailsFooter from "../detailsFooter"
import PlayButton from "../playButton"
import ContentDetailImage from "../image"


type MovieDetailsContentPropsType = {
    movie: MovieDetailsTypes,
}

export const MovieDetailsContent: React.FC<MovieDetailsContentPropsType> = ({ movie }) => {

    const getYear: string[] = movie.release_date.split("-")

    const year: string = getYear[0];

    const runtime = movie.runtime;
    const hours = Math.floor(runtime / 60);
    const minute = runtime % 60;

    return (
        <>
           <ContentDetailImage backdrop_path={movie.backdrop_path} />

            <View style={styles.body}>

                <Text style={styles.title}>{movie.original_title}</Text>

                <View style={styles.top_content} >
                    <Text style={styles.release_year}>{year}</Text>
                    <Text style={styles.tagline}>{movie.tagline}</Text>
                </View>

                <Text style={styles.runtime_info}>{hours} hrs. {minute} mins.</Text>


                <PlayButton />

                <Text style={styles.overview}>{movie.overview}</Text>

               <ContentDetailsFooter />

            </View>
            <View style={styles.border} />

            <Text style={styles.similar_text}>Similar</Text>

        </>
    )
}
