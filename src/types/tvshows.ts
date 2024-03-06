import { commonTypes } from "./commonTypes"

export interface TvShowsTypes extends commonTypes {
    genre_ids : [number]
    original_name : String
    first_air_date : String
    name : String
}