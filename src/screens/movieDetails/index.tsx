import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainNavigatorStackParamList } from '../../navigators/types'
import { colors } from '../../styles/colors'
import { useFetchMovieDetailsQuery } from '../../store/features/APIs/movies'
import MovieDetailScreenContainer from '../../containers/movieDetailScreenContainer'
import Error from '../../components/errorAnimation'
import Loading from '../../components/loading'


type ProfileProps = NativeStackScreenProps<MainNavigatorStackParamList, 'MovieDetailsScreen'>


const MovieDetailsScreen : React.FC<ProfileProps> = ({route}) => {

  const [skip, setSkip] = useState(false)

    const {movie_id} = route.params

    const {data, isLoading, isError } = useFetchMovieDetailsQuery(movie_id, {skip})
    

    if  (isError) return <Error />
    else if (isLoading) return <Loading />



  return (
    <View style={styles.container}>
    {
      data  ?  <MovieDetailScreenContainer movie={data}  />  : <Text style={{color : '#fff'}}> NO DATA</Text>
    }
    </View>
  )
}

export default MovieDetailsScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.third
    }
})