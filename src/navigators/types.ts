export type MainNavigatorStackParamList = {
    HomeScreen: undefined
    TvShowsScreen: undefined,
    MoviesByGenreScreen: { value: string, genreid: string } ,
    ContentBySearchScreen: { value: string,  activeSearchContent : 'Home' | 'Tv' | 'Movie' } ,
    MovieDetailsScreen : {movie_id : number, movie_title : string}
}


export type ProfileStackParamList = {
    ProfileScreen: undefined
}


export type AuthenticationNavigatorStackParamList = {
   LoginScreen : undefined,
   SignupScreen : undefined
}

