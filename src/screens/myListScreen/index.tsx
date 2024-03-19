import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../styles/colors'
import firestore from '@react-native-firebase/firestore';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { ContentListItemType } from '../../types/UserDBdata';
import MyListScreenContainer from '../../containers/myListScreenContainer';


const MyListScreen: React.FC = () => {
    const [list, setList] = useState<[ContentListItemType] | []>([])
    const currentUser: FirebaseAuthTypes.User | null = auth().currentUser


    useEffect(() => {
        const getData = async () => {
            await getUserListFromDB()
        }
        getData()
    }, [])

    const getUserListFromDB = async () => {
        const dbRef = await firestore().collection('users').doc(currentUser?.uid).get()

        if (dbRef.exists) {
            const userData = dbRef.data()
            const userList = userData?.contentList ?? []
            setList(userList)
        }
    }




    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
               <MyListScreenContainer list={list} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default MyListScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.third,
        flex: 1,
    },
})