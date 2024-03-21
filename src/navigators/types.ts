import { ActiveContent } from "../types/activeContent"

export type MainNavigatorStackParamList = {
    HomeScreen: undefined
    TvShowsScreen: undefined,
    MoviesScreen: undefined,
    ContentByGenreScreen: { value: string, genreid: string, activeContent : ActiveContent } ,
    ContentBySearchScreen: { value: string,  activeContent : ActiveContent } ,
    ContentDetailsScreen : {content_id : number, content_title : string, activeContent : ActiveContent}
}

export type ProfileNavigatorStackParamList = {
    ProfileScreen : undefined,
    MyListScreen : undefined
}

export type ChatRoomsNavigatorStackParamList = {
    RoomsScreen : undefined,
    ChatRoomScreen : {room_id : string, room_name : string}
}


export type AuthenticationNavigatorStackParamList = {
   LoginScreen : undefined,
   SignupScreen : undefined
}

