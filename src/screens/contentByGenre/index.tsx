import { StyleSheet,  View } from 'react-native'
import React from 'react'
import { colors } from '../../styles/colors';
import { useFetchMoviesBygenreQuery } from '../../Services/MoviesService';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainNavigatorStackParamList } from '../../navigators/types';
import Error from '../../components/errorAnimation';
import Loading from '../../components/loading';
import { ActiveContent } from '../../types/activeContent';
import ContentByGenreScreenContainer from '../../containers/contentByGenreScreenContainer';
import { useFetchTVShowsByGenreQuery } from '../../Services/TvSeriesService';
import { useLanguage } from '../../store/features/language/hooks';

type ProfileProps = NativeStackScreenProps<MainNavigatorStackParamList, 'ContentByGenreScreen'>

const ContentByGenreScreen: React.FC<ProfileProps> = ({ route }) => {

    const language = useLanguage()
    const { genreid, activeContent } = route.params
    const { data : movieData, isLoading : movieLoading, isError: movieError } = useFetchMoviesBygenreQuery({genreid, language},  {
        skip: activeContent != ActiveContent.Movie
      })
    const { data: tvData, isLoading: tvLoading, isError: tvError } = useFetchTVShowsByGenreQuery({genre_id :genreid, language}, {
        skip: activeContent != ActiveContent.TVShow
      })






    if (activeContent == ActiveContent.Movie) {

        if (movieError) return <Error />
        else if (movieLoading) return <Loading />
        
    } else{
        if (tvError) return <Error />
        else if (tvLoading) return <Loading />
    }



    return (
        <View style={styles.container}>
            <ContentByGenreScreenContainer  content={activeContent == ActiveContent.Movie ? movieData.results : tvData.results} activeContent={activeContent} />
        </View>
    )
}

export default ContentByGenreScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.third,
        flex: 1,
    }
})