import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore"
import { ContentListItemType } from "../../types/UserDBdata"

export const deleteContentFromDB = async (
  currentContentList: ContentListItemType[],
  dbRef: FirebaseFirestoreTypes.DocumentSnapshot<FirebaseFirestoreTypes.DocumentData>,
  contentID :number,
  setIsAlreadyInList : (isInList : boolean) => void
) => {
  try {
    const updatedContentList = currentContentList.filter(
      (item: ContentListItemType) => item.contentID !== contentID
    )
    await dbRef.ref.update({ contentList: updatedContentList })
    setIsAlreadyInList(false)
  } catch (error) {
    console.error("Error deleting content from database:", error)
    throw error
  }
}

export const addContentToDB = async (
  currentContentList: ContentListItemType[],
  dbRef: FirebaseFirestoreTypes.DocumentSnapshot<FirebaseFirestoreTypes.DocumentData>,
  contentType: string,
  contentID: number,
  contentName: string,
  contentImageUrl: string,
  setIsAlreadyInList: (isInList: boolean) => void
) => {
  try {
    const updatedContentList = [
      ...currentContentList,
      {
        contentType,
        contentID,
        imageUrl: `${process.env.IMAGE_PATH}/${contentImageUrl}`,
        contentName,
      },
    ];
    await dbRef.ref.update({ contentList: updatedContentList })
    setIsAlreadyInList(true)
  } catch (error) {
    console.error("Error adding content to database:", error)
    throw error
  }
}