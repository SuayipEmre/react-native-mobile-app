export interface RoomsTypes  {
    id: string
    members: MemberItemTypes[]
    roomOwner: string
    roomName: string
    messages: MessagesItemType[]
}


export type MessagesItemType = {
    messageId : string
    message : string
    date : string
    owner: MemberItemTypes
}

export type MemberItemTypes = {
    id: string
    photo: string,
    name: string
}

