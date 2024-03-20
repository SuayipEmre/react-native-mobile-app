import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'
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
        getUserListFromDB()
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
                {
                    list.length > 0 ? <MyListScreenContainer list={list} /> : <Text style={styles.empty_list_text}>Your List is empty 🥱</Text>
                }
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
    empty_list_text: {
        color: colors.primary,
        alignSelf: 'center',
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 1,
    },
})