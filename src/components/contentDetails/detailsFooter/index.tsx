import { Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import Ant from 'react-native-vector-icons/AntDesign'
import styles from "../styles"
import { colors } from '../../../styles/colors'
import { ActiveContent } from '../../../types/activeContent'
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { ContentListItemType } from '../../../types/UserDBdata'
/*

neccessary informations : 
1 - content type = movie | tv 
2 - content id

*/

type ContentDetailsFooterPropsTypes = {
  contentType: ActiveContent
  contentID: number
}


const ContentDetailsFooter: React.FC<ContentDetailsFooterPropsTypes> = ({ contentType, contentID }) => {
  const currentUser: FirebaseAuthTypes.User | null = auth().currentUser
  console.log("current content id : ", contentID)
  console.log("current content type: ", contentType)


  const get = async () => {
    const dbRef = await firestore().collection('users').doc(currentUser?.uid).get()

  }

  const handleAddMylist = async () => {
    try {
      const dbRef = await firestore().collection('users').doc(currentUser?.uid).get()

      if (dbRef.exists) {
        const userData = dbRef.data();
        const currentContentList = userData?.contentList ?? []
        
        //check that content is already in list
        const isAlreadyInList = currentContentList.some((item: ContentListItemType) => item.contentID == contentID)


        //if content is not in content list, add the content to db
        if (!isAlreadyInList) {
          const updatedContentList = [...currentContentList, { contentType, contentID }]
          await dbRef.ref.update({ contentList: updatedContentList })
        }else{
          console.log('is already in list');
          
        }


      } else {
        console.log("could not find user's doc")
      }
    } catch (error) {
      console.error("db ref error !", error)
    }
  }



  return (
    <View style={styles.bottom_content}>


      <TouchableOpacity style={styles.bottom_content_button} onPress={handleAddMylist}>
        <Entypo name="plus" size={24} color={colors.primary} />
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
