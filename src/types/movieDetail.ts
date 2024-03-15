import { Network, ProductionCountry, SpokenLanguage, CommonTypes } from "./CommonTypes"
import { GenreTypes } from "./genres"

export interface MovieDetailsTypes extends CommonTypes{
    genres : GenreTypes[]
    belongs_to_collection:null
    budget:number
    homepage:string
    imdb_id:string
    revenue:number,
    runtime:number
    status:string
    tagline:string
    production_companies : Network[]
    production_countries : ProductionCountry[]
    spoken_languages : SpokenLanguage[]

}


