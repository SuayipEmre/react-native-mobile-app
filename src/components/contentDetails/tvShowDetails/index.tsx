import {  Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TVShowDetailsTypes } from '../../../types/tvShowDetails'
import styles from '../styles'
import ContentDetailsFooter from '../detailsFooter'
import PlayButton from '../playButton'
import ContentDetailImage from '../image'
import { ActiveContent } from '../../../types/activeContent'

type TVShowDetailsPropsTypes = {
    tvShow: TVShowDetailsTypes
    preferredContent: 'similar' | 'trailers',
    setPreferredContent: (preferredContent: 'similar' | 'trailers') => void
}
const TVShowDetails: React.FC<TVShowDetailsPropsTypes> = ({ tvShow, setPreferredContent }) => {

    const getYear: string[] = tvShow.first_air_date.split("-")

    const year: string = getYear[0];


    return (
        <View>
             <ContentDetailImage backdrop_path={tvShow.backdrop_path} />

            <View style={styles.body}>

                <Text style={styles.title}>{tvShow.original_name}</Text>

                <View style={styles.top_content} >
                    <Text style={styles.release_year}>{year}</Text>
                    <Text style={styles.tagline}>{tvShow.tagline}</Text>
                </View>

                <PlayButton />

                <Text style={styles.overview}>{tvShow.overview}</Text>

                <ContentDetailsFooter contentID={tvShow.id} contentType={ActiveContent.TVShow} contentImageUrl={tvShow.poster_path} contentName={tvShow.name} />
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
        </View>
    )
}

export default TVShowDetails
