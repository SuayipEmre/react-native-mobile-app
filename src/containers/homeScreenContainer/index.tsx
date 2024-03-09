import { ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/header'
import FeaturedMovie from '../../components/featuredMovie'
import { MovieTypes } from '../../types/movie'

import { TvShowsTypes } from '../../types/tvshows'
import ContentListContainer, { fadeDirection } from '../../components/contentList/contentListContainer'
import ContentLayout from '../../layouts/contentLayout'
import { ActiveContent } from '../../types/activeContent'


type HomeScreenContainerPropsType = {
    trendingMovies: Array<MovieTypes>,
    trendingTVShows: Array<TvShowsTypes>,
    popularMovies: Array<TvShowsTypes>,
    popularTVShows: Array<MovieTypes>,
}
const HomeScreenContainer: React.FC<HomeScreenContainerPropsType> = ({
    popularMovies,
    trendingMovies,
    popularTVShows,
    trendingTVShows,
}) => {


    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ marginTop: 16, alignItems: 'center', paddingBottom: 30 }}>

            <ContentLayout>

            <Header activeScreen='Home'  />
            <FeaturedMovie content={trendingMovies[0]} activeContent={ActiveContent.Movie} />

            <ContentListContainer title='Trend Movies' content={trendingMovies} fadeDirection={fadeDirection.FadeInRight} delaytime={400} activeContent={ActiveContent.Movie} />
            <ContentListContainer title='Trend TV Shows' content={trendingTVShows} fadeDirection={fadeDirection.FadeInRight} delaytime={900} activeContent={ActiveContent.TVShow} />
            <ContentListContainer title='Popular Movies' content={popularMovies} fadeDirection={fadeDirection.FadeInLeft} delaytime={100}activeContent={ActiveContent.Movie} />
            <ContentListContainer title='Popular TV Shows' content={popularTVShows} fadeDirection={fadeDirection.FadeInLeft} delaytime={600} activeContent={ActiveContent.TVShow} />

        </ContentLayout>


        </ScrollView >
    )
}

export default HomeScreenContainer
