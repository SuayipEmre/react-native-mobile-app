import { Text, TouchableOpacity } from "react-native"
import { View } from "react-native"
import styles from "../styles"
import { MovieDetailsTypes } from "../../../types/movieDetail"
import ContentDetailsFooter from "../detailsFooter"
import PlayButton from "../playButton"
import ContentDetailImage from "../image"
import { ActiveContent } from "../../../types/activeContent"


type MovieDetailsContentPropsType = {
    movie: MovieDetailsTypes,
    preferredContent: 'similar' | 'trailers',
    setPreferredContent: (preferredContent: 'similar' | 'trailers') => void
}

export const MovieDetails: React.FC<MovieDetailsContentPropsType> = ({ movie, setPreferredContent, preferredContent }) => {

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

                <ContentDetailsFooter contentID={movie.id} contentType={ActiveContent.Movie}  contentImageUrl={movie.poster_path} contentName={movie.title}/>

            </View>
            <View style={styles.border} />

            <View style={{flexDirection :'row', alignItems:'center', gap:4}}>
                <TouchableOpacity onPress={() => setPreferredContent('similar')}>
                    <Text style={styles.similar_text}>Similar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setPreferredContent('trailers')}>
                    <Text style={styles.similar_text}>Trailers</Text>
                </TouchableOpacity>
            </View>

        </>
    )
}
