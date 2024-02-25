import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const baseEndPoint = process.env.BASE_ENDPOINT
const apiKey =  process.env.API_KEY

const moviesAPi = createApi({
    reducerPath: 'moviesAPi',

    baseQuery: fetchBaseQuery({
        baseUrl: baseEndPoint,
    }),
    endpoints: (builder) => ({

        fetchPopularMovies: builder.query({
            query: () => {
                return {
                    url: '/movie/popular',
                    method: 'GET',
                    params: {
                        lanaguage: 'en',
                        api_key: apiKey
                    }
                }
            }
        }),
    })
})

export const { useFetchPopularMoviesQuery } = moviesAPi
export default moviesAPi