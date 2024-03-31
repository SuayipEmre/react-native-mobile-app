import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const baseEndPoint = process.env.BASE_ENDPOINT
const apiKey = process.env.API_KEY

const GenresService = createApi({
    reducerPath: 'genres service',

    baseQuery: fetchBaseQuery({
        baseUrl: baseEndPoint,
    }),
    endpoints: (builder) => ({

        fetchGenresOfMovies: builder.query({
            query: (language : string) => {
                return {
                    url: '/genre/movie/list',
                    method: 'GET',
                    params: {
                        language: language,
                        api_key: apiKey
                    }
                }
            }
        }),
        fetchGenresOfTvList: builder.query({
            query: (language : string) => {
                return {
                    url: '/genre/tv/list',
                    method: 'GET',
                    params: {
                        language: language,
                        api_key: apiKey
                    }
                }
            }
        }),
      
    })
})
export const {
    useFetchGenresOfMoviesQuery,  
    useFetchGenresOfTvListQuery
} = GenresService
export default GenresService