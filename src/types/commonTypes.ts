export type commonTypes = {
    id : number,
    adult : boolean,
    backdrop_path?  : string,
    original_language : string
    overview:string,
    popularity:string,
    poster_path?:string,
    vote_average:number,
    vote_count:number
    original_title : string
    release_date:string,
    title:string,
    video:boolean
}


export interface SpokenLanguage {
    english_name: string;
    iso_639_1:    string;
    name:         string;
}


export interface Network {
    id:             number;
    logo_path:      null | string;
    name:           string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name:       string;
}