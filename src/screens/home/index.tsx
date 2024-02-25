import {  Text, ActivityIndicator, SafeAreaView} from 'react-native'
import React from 'react'
import { useCurrentTheme } from '../../store/features/theme/hooks'
import { colors } from '../../styles/colors'
import { setCurrentTheme } from '../../store/features/theme/actions'
import HomeScreenContainer from '../../containers/homeScreenContainer'
import { useFetchPopularMoviesQuery } from '../../store/features/APIs/movies'


const HomeScreen = () => {

  
  const {data, isLoading, isError} = useFetchPopularMoviesQuery({})

  
    const currentTheme = useCurrentTheme()
    const third = colors[currentTheme].third

    const handleTheme = () => {
      const isCurrentDark : boolean = currentTheme == "darkTheme" ? true : false
      setCurrentTheme(isCurrentDark ? 'lightTheme' : 'darkTheme')
    }


    if (isError) return <Text></Text>
    else if (isLoading) return <ActivityIndicator />

    return (
    <SafeAreaView style={{
        backgroundColor:third,
        flex : 1,
    }}>
     <HomeScreenContainer movies={data.results}   />


    </SafeAreaView>
  )
}

export default HomeScreen
