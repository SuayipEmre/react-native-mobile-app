import { ActiveContent } from "./activeContent";

export interface UserDBData {
    displayName: string;
    email: string;
    favoriteContents: any[];
    contentList: [ContentListItemType];
    photoURL: string | null;
    id: string;
}

export type ContentListItemType = {
    contentID: number,
    contentType: ActiveContent
    imageUrl : string,
    contentName : string
}