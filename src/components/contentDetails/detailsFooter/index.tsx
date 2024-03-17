import React, { useEffect, useState } from 'react';
import {  Text, TouchableOpacity, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ant from 'react-native-vector-icons/AntDesign';
import styles from "../styles";
import { colors } from '../../../styles/colors';
import { ActiveContent } from '../../../types/activeContent';
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { ContentListItemType } from '../../../types/UserDBdata';

type ContentDetailsFooterPropsTypes = {
  contentType: ActiveContent
  contentID: number
}

const ContentDetailsFooter: React.FC<ContentDetailsFooterPropsTypes> = ({ contentType, contentID }) => {
  const [isAlreadyInList, setIsAlreadyInList] = useState<boolean>(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const currentUser: FirebaseAuthTypes.User | null = auth().currentUser

  useEffect(() => {

    const checkContentAlreadyInList = async () => {
      try {
        const dbRef = await getUserDocument();
        if (dbRef.exists) {
          const userData: FirebaseFirestoreTypes.DocumentData | undefined = dbRef.data()
          const currentContentList = userData?.contentList ?? []
          setIsAlreadyInList(currentContentList.some((item: ContentListItemType) => item.contentID === contentID))
        }
      } catch (error) {
        console.error("Error while checking content in list:", error)
      }
    }

    checkContentAlreadyInList()
  }, [contentID, contentType])

  const getUserDocument = async () => {
    const dbRef = await firestore().collection('users').doc(currentUser?.uid).get()
    return dbRef
  }

  const modifyListContent = async () => {
    setIsButtonDisabled(true)
    setTimeout(() => {
      setIsButtonDisabled(false)
    }, 1000)

    try {
      const dbRef = await getUserDocument()

      if (dbRef.exists) {
        const userData = dbRef.data()
        const currentContentList = userData?.contentList ?? []


        //if content is already in contentList in database, remove content from db
        if (isAlreadyInList) {
          const updatedContentList = currentContentList.filter((item: ContentListItemType) => item.contentID != contentID)
          await dbRef.ref.update({ contentList: updatedContentList })
          setIsAlreadyInList(false)
        } else {
          const updatedContentList = [...currentContentList, { contentType, contentID }]
          await dbRef.ref.update({ contentList: updatedContentList })
          setIsAlreadyInList(true)
        }

      }
      else {
        console.log("Could not find user's document")
      }

    } catch {
      console.log("err")

    }


  }





  return (
    <View style={styles.bottom_content}>
      <TouchableOpacity
        style={styles.bottom_content_button}
        onPress={modifyListContent}
        disabled={isButtonDisabled}>
        {
          isAlreadyInList ? <Ant name="check" size={24} color={colors.primary} /> : <Entypo name="plus" size={24} color={colors.primary} />
        }

        <Text style={styles.bottom_content_text}>My List</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bottom_content_button}>
        <Ant name="like2" size={24} color={colors.primary} />
        <Text style={styles.bottom_content_text}>Rate</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bottom_content_button}>
        <Entypo name="share" size={24} color={colors.primary} />
        <Text style={styles.bottom_content_text}>Share</Text>
      </TouchableOpacity>

     
    </View>
  )
}

export default ContentDetailsFooter
