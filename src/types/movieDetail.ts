import { commonTypes } from "./commonTypes"

export interface movieDetailsTypes extends commonTypes{
    genres : Array<{
        id : number,
        name : string
    }>
    belongs_to_collection:null
    budget:number
    homepage:string
    imdb_id:string
    revenue:number,
    runtime:number
    status:string
    tagline:string
    production_companies : Array<productionCompaniesItemTypes>
    production_countries : Array<productionCountriesItemTypes>
    spoken_languages : Array<spokenLanguagesItemTypes>

}

type productionCompaniesItemTypes = {
    id:number,
    logo_path : null | string,
    name:string,
    origin_country:string
}


type productionCountriesItemTypes = {
    iso_3166_1:string,
    name : string
}

type spokenLanguagesItemTypes = {
    english_name:string,
    iso_639_1:string
    name:string
}