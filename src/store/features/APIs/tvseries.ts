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
        })
     
        
       
    }),
    
  
    
})

export const {
    useFetchPopularTVShowsQuery,
    useFetchTrendingTVShowsQuery
} = tvShowsApi
export default tvShowsApi