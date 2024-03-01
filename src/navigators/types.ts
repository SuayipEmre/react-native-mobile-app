export type MainNavigatorStackParamList = {
    LaunchScreen: undefined;
    HomeScreen: undefined
    MoviesByGenreScreen: { value: string, genreid: string } ,
    MoviesBySearchScreen: { value: string } ,
    MovieDetailsScreen : {movie_id : number}
}


export type ProfileStackParamList = {
    ProfileScreen: undefined
}


export type AuthenticationNavigatorStackParamList = {
   LoginScreen : undefined,
   SignupScreen : undefined
}

