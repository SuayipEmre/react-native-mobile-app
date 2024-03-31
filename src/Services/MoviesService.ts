import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { Language } from '../types/language'

const baseEndPoint = process.env.BASE_ENDPOINT
const apiKey = process.env.API_KEY

const MoviesService = createApi({
    reducerPath: 'movies service',

    baseQuery: fetchBaseQuery({
        baseUrl: baseEndPoint,
    }),
    endpoints: (builder) => ({

        fetchPopularMovies: builder.query({
            query: (language : Language) => {
                return {
                    url: '/movie/popular',
                    method: 'GET',
                    params: {
                        language: language,
                        api_key: apiKey
                    }
                }
            }
        }),
        fetchTrendingMovies: builder.query({
            query: (language : Language) => {
                return {
                    url: '/trending/movie/day',
                    method: 'GET',
                    params: {
                        language: language,
                        api_key: apiKey
                    }
                }
            }
        }),
        fetchTopRatedMovies: builder.query({
            query: (language : Language) => {
                return {
                    url: '/movie/top_rated',
                    method: 'GET',
                    params: {
                        language: language,
                        api_key: apiKey
                    }
                }
            }
        }),
        fetchNowPlayingMovies: builder.query({
            query: (language : Language) => {
                return {
                    url: '/movie/now_playing',
                    method: 'GET',
                    params: {
                        language: language,
                        api_key: apiKey
                    }
                }
            }
        }),

        fetchUpComingMovies: builder.query({
            query: (language : Language) => {
                return {
                    url: '/movie/upcoming',
                    method: 'GET',
                    params: {
                        language: language,
                        api_key: apiKey
                    }
                }
            }
        }),
        fetchMoviesBygenre: builder.query({
            query: ({genreid, language} : {genreid : string, language : Language}) => {
                return {
                    url: `/genre/${genreid}/movies`,
                    method: 'GET',
                    params: {
                        language: language,
                        api_key: apiKey
                    }
                }
            }
        }),

        fetchMoviesBySearch: builder.query({
            query: ({searchValue, language} : {searchValue : string, language : Language}) => {
                return {
                    url: '/search/movie',
                    method: 'GET',
                    params: {
                        language: language,
                        api_key: apiKey,
                        query: searchValue
                    }
                }
            }
        }),

        fetchMovieDetails: builder.query({
            query: (
                { movie_id, language }: { movie_id: number, language: Language }
            ) => {
                return {
                    url: `/movie/${movie_id}`,
                    method: 'GET',
                    params: {
                        language,
                        api_key: apiKey,
                    }
                }
            }
        }),

        fetchSimilarMovies: builder.query({
            query: ({id, language } : { id: number, language: Language }) => {
                return {
                    url: `/movie/${id}/similar`,
                    method: 'GET',
                    params: {
                        language: language,
                        api_key: apiKey,
                    }
                }
            }
        }),
        fetchMovieVideos: builder.query({
            query: ({id, language} :{ id: number | null , language: Language }) => {
                return {
                    url: `/movie/${id}/videos`,
                    method: 'GET',
                    params: {
                        language: language,
                        api_key: apiKey,
                    }
                }
            }
        }),


    })




})








export const {
    useFetchPopularMoviesQuery,
    useFetchTrendingMoviesQuery,
    useFetchTopRatedMoviesQuery,
    useFetchNowPlayingMoviesQuery,
    useFetchUpComingMoviesQuery,
    useFetchMoviesBygenreQuery,
    useFetchMoviesBySearchQuery,
    useFetchMovieDetailsQuery,
    useFetchSimilarMoviesQuery,
    useFetchMovieVideosQuery
} = MoviesService
export default MoviesService