export type HomeNavigatorStackParamList = {
    LaunchScreen: undefined;
    HomeScreen: undefined
    MoviesByGenreScreen: { value: string, genreid: string } ,
    MoviesBySearchScreen: { value: string } 
}


export type ProfileStackParamList = {
    ProfileScreen: undefined
}


export type AuthenticationNavigatorStackParamList = {
   LoginScreen : undefined,
   SignupScreen : undefined
}

