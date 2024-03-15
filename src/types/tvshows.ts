import { CommonTypes } from "./CommonTypes"

export interface TvShowsTypes extends CommonTypes {
    genre_ids : [number]
    original_name : String
    first_air_date : String
    name : String
}