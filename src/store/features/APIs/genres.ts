import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const baseEndPoint = process.env.BASE_ENDPOINT
const apiKey = process.env.API_KEY

const genresApi = createApi({
    reducerPath: 'genresApi',

    baseQuery: fetchBaseQuery({
        baseUrl: baseEndPoint,
    }),
    endpoints: (builder) => ({

        fetchGenresOfMovies: builder.query({
            query: () => {
                return {
                    url: '/genre/movie/list',
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

export const {
    useFetchGenresOfMoviesQuery,  
} = genresApi
export default genresApi