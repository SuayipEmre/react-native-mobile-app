export interface MovieTypes extends sameTypes{
    genre_ids : Array<number>
}


export interface movieDetailsTypes extends sameTypes{
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


export interface sameTypes {
    id : number,
    adult : boolean,
    backdrop_path  : string,
    original_language : string
    original_title : string
    overview:string,
    popularity:string,
    poster_path:string,
    release_date:string,
    title:string,
    video:boolean
    vote_average:number,
    vote_count:number
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