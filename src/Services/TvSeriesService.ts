import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const baseEndPoint = process.env.BASE_ENDPOINT
const apiKey = process.env.API_KEY

const TvSeriesService = createApi({
    reducerPath: 'tv series service',

    baseQuery: fetchBaseQuery({
        baseUrl: baseEndPoint,
    }),
    endpoints: (builder) => ({

        fetchPopularTVShows: builder.query({
            query: (language : string) => {
                return {
                    url: '/tv/popular',
                    method: 'GET',
                    params: {
                        language ,
                        api_key: apiKey
                    }
                }
            }
        }),
        fetchTrendingTVShows :builder.query({
            query: (language : string) => {
                return {
                    url: `/trending/tv/day`,
                    method: 'GET',
                    params: {
                        language,
                        api_key: apiKey,
                    }
                }
            }
        }),
        fetchTopRatedTVShows :builder.query({
            query: (language : string) => {
                return {
                    url: `/tv/top_rated`,
                    method: 'GET',
                    params: {
                        language,
                        api_key: apiKey,
                    }
                }
            }
        }),
        fetchOnTheAirTVShows :builder.query({
            query: (language : string) => {
                return {
                    url: `/discover/tv`,
                    method: 'GET',
                    params: {
                        language,
                        api_key: apiKey,
                    }
                }
            }
        }),
        fetchTVShowsBySearchValue :builder.query({
            query: ({searchValue, language} : {searchValue : string, language : string}) => {
                return {
                    url: `/search/tv`,
                    method: 'GET',
                    params: {
                        language,
                        api_key: apiKey,
                        query : searchValue
                    }
                }
            }
        }),
        fetchTVShowsDetails :builder.query({
            query: ({series_id, language} : {series_id : number, language : string}) => {
                return {
                    url: `/tv/${series_id}`,
                    method: 'GET',
                    params: {
                        language,
                        api_key: apiKey,
                    }
                }
            }
        }),
        fetchSimilarTVShows :builder.query({
            query: ({show_id, language} : {show_id : number, language : string}) => {
                return {
                    url: `/tv/${show_id}/similar`,
                    method: 'GET',
                    params: {
                        language,
                        api_key: apiKey,
                    }
                }
            }
        }),
        fetchTVShowsByGenre :builder.query({
            query: ({genre_id, language} : {genre_id : string, language : string} ) => {
                return {
                    url: `/discover/tv`,
                    method: 'GET',
                    params: {
                        language,
                        api_key: apiKey,
                        with_genres : genre_id
                    }
                }
            }
        }),

        fetchTVShowVideos :builder.query({
            query: ({id, language} :{id : number | null, language :string}) => {
                return {
                    url: `/tv/${id}/videos`,
                    method: 'GET',
                    params: {
                        language,
                        api_key: apiKey,
                    }
                }
            }
        }),

     
     
        
       
    }),
    
})

//https://api.themoviedb.org/3/tv/{series_id}/videos
export const {
    useFetchPopularTVShowsQuery,
    useFetchTrendingTVShowsQuery,
    useFetchTopRatedTVShowsQuery,
    useFetchOnTheAirTVShowsQuery,
    useFetchTVShowsBySearchValueQuery,
    useFetchTVShowsDetailsQuery,
    useFetchSimilarTVShowsQuery,
    useFetchTVShowsByGenreQuery,
    useFetchTVShowVideosQuery
} = TvSeriesService
export default TvSeriesService

