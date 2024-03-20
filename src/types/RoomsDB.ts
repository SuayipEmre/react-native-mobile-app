export interface RoomsTypes  extends RoomsItemType{
    id: string
}

export type RoomsItemType = {
    members: MemberItemTypes[]
    roomOwner: string
    roomName: string
    messages: []
}


export type MemberItemTypes = {
    id: string
    photo: string,
    name: string
}