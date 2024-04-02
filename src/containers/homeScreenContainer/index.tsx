import React, { PropsWithChildren } from 'react'
import Header from '../../components/header'
import FeaturedMovie from '../../components/featuredMovie'
import { MovieTypes } from '../../types/movie'

import ContentLayout from '../../layouts/contentLayout'
import { ActiveContent } from '../../types/activeContent'


type HomeScreenContainerPropsType = {
    trendingMovies: MovieTypes,
    children: React.ReactNode
}
const HomeScreenContainer: React.FC<PropsWithChildren<HomeScreenContainerPropsType>>= ({
    trendingMovies,
    children,
}) => {


    return (
        <>
            <ContentLayout>
                <Header />
                <FeaturedMovie content={trendingMovies} activeContent={ActiveContent.Movie} />
                {children}
            </ContentLayout>
        </ >
    )
}

export default HomeScreenContainer
