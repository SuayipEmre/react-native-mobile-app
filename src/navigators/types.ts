export type MainNavigatorStackParamList = {
    HomeScreen: undefined
    TvShowsScreen: undefined,
    MoviesScreen: undefined,
    MoviesByGenreScreen: { value: string, genreid: string } ,
    ContentBySearchScreen: { value: string,  activeSearchContent : 'Home' | 'Tv' | 'Movie' } ,
    MovieDetailsScreen : {content_id : number, content_title : string, activeContent : 'Movie' | 'TV'}
}


export type ProfileStackParamList = {
    ProfileScreen: undefined
}


export type AuthenticationNavigatorStackParamList = {
   LoginScreen : undefined,
   SignupScreen : undefined
}

