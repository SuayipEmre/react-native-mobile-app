import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const baseEndPoint = process.env.BASE_ENDPOINT
const apiKey = process.env.API_KEY

const tvShowsApi = createApi({
    reducerPath: 'tv shows api',

    baseQuery: fetchBaseQuery({
        baseUrl: baseEndPoint,
    }),
    endpoints: (builder) => ({

        fetchPopularTVShows: builder.query({
            query: () => {
                return {
                    url: '/tv/popular',
                    method: 'GET',
                    params: {
                        lanaguage: 'en',
                        api_key: apiKey
                    }
                }
            }
        }),
        fetchTrendingTVShows :builder.query({
            query: () => {
                return {
                    url: `/trending/tv/day`,
                    method: 'GET',
                    params: {
                        lanaguage: 'en',
                        api_key: apiKey,
                    }
                }
            }
        }),
        fetchTopRatedTVShows :builder.query({
            query: () => {
                return {
                    url: `/tv/top_rated`,
                    method: 'GET',
                    params: {
                        lanaguage: 'en',
                        api_key: apiKey,
                    }
                }
            }
        }),
        fetchOnTheAirTVShows :builder.query({
            query: () => {
                return {
                    url: `/discover/tv`,
                    method: 'GET',
                    params: {
                        lanaguage: 'en',
                        api_key: apiKey,
                    }
                }
            }
        }),
        fetchTVShowsBySearchValue :builder.query({
            query: (searchValue : string) => {
                return {
                    url: `/search/tv`,
                    method: 'GET',
                    params: {
                        lanaguage: 'en',
                        api_key: apiKey,
                        query : searchValue
                    }
                }
            }
        }),
        fetchTVShowsDetails :builder.query({
            query: (series_id : number) => {
                return {
                    url: `/tv/${series_id}`,
                    method: 'GET',
                    params: {
                        lanaguage: 'en',
                        api_key: apiKey,
                    }
                }
            }
        }),
        fetchSimilarTVShows :builder.query({
            query: (show_id : number) => {
                return {
                    url: `/tv/${show_id}/similar`,
                    method: 'GET',
                    params: {
                        lanaguage: 'en',
                        api_key: apiKey,
                    }
                }
            }
        }),
     
     
        
       
    }),
    
  //search/tv?query=barbie
    
})


export const {
    useFetchPopularTVShowsQuery,
    useFetchTrendingTVShowsQuery,
    useFetchTopRatedTVShowsQuery,
    useFetchOnTheAirTVShowsQuery,
    useFetchTVShowsBySearchValueQuery,
    useFetchTVShowsDetailsQuery,
    useFetchSimilarTVShowsQuery
} = tvShowsApi
export default tvShowsApi