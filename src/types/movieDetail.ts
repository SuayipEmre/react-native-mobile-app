import { Network, ProductionCountry, SpokenLanguage, commonTypes } from "./commonTypes"
import { GenreTypes } from "./genres"

export interface movieDetailsTypes extends commonTypes{
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


