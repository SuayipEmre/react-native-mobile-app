import {  Text, View } from 'react-native'
import React from 'react'
import { TVShowDetailsTypes } from '../../../types/tvShowDetails'
import styles from '../styles'
import ContentDetailsFooter from '../detailsFooter'
import PlayButton from '../playButton'
import ContentDetailImage from '../image'

type TVShowDetailsPropsTypes = {
    tvShow: TVShowDetailsTypes
}
const TVShowDetails: React.FC<TVShowDetailsPropsTypes> = ({ tvShow }) => {

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

                <ContentDetailsFooter />
            </View>


            <View style={styles.border} />

            <Text style={styles.similar_text}>Similar</Text>
        </View>
    )
}

export default TVShowDetails
