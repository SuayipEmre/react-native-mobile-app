import { ActiveContent } from "./activeContent";

interface UserDBData {
    displayName: string;
    email: string;
    favoriteContents: any[];
    contentList: any[];
    photoURL: string | null;
    id: string;
}

export type ContentListItemType = {
    contentID: number,
    contentType: ActiveContent
}