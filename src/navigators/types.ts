import { ActiveContent } from "../types/activeContent"

export type MainNavigatorStackParamList = {
    HomeScreen: undefined
    TvShowsScreen: undefined,
    MoviesScreen: undefined,
    MoviesByGenreScreen: { value: string, genreid: string } ,
    ContentBySearchScreen: { value: string,  activeContent : ActiveContent } ,
    MovieDetailsScreen : {content_id : number, content_title : string, activeContent : ActiveContent}
}


export type ProfileStackParamList = {
    ProfileScreen: undefined
}


export type AuthenticationNavigatorStackParamList = {
   LoginScreen : undefined,
   SignupScreen : undefined
}

