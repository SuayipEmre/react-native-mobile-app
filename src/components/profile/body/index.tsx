import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ant from 'react-native-vector-icons/AntDesign'
import { colors } from '../../../styles/colors'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

const ProfileBody = () => {
    const currentUser: FirebaseAuthTypes.User | null = auth().currentUser

    const deleteAccount  = async () => {
     
        if (currentUser){
            try {
                await currentUser.delete()
            } catch (error) {
                console.log(error);
                
            }
        }
        
    }


    const showAlert = () => (
        Alert.alert(
            'MM',
            'You will lose all your data by deleting your account. This action cannot be undone. ',
            [
                {
                    text: 'No! I have changed my mind',
                    style: 'default',
                    isPreferred : true
                },
              
                {
                    text: 'Delete my account',
                    onPress: () => deleteAccount(),
                    style: 'destructive',
                },

            ],


        )
    )



    return (
        <View style={styles.body}>

            <View style={styles.body_item_container}>
                <Ant name='plus' color={colors.primary} size={24} />
                <Text style={styles.body_item_text}>My List</Text>
            </View>

            <View style={styles.body_item_container}>
                <Ant name='heart' color={'#FF0800'} size={23} />
                <Text style={styles.body_item_text}>My Favorites</Text>
            </View>

                  
      <TouchableOpacity onPress={showAlert} style={styles.delete_button}>
          <Ant name='close' color='red' size={27} />
          <Text style={styles.delete_text}>Delete Account</Text>
        </TouchableOpacity>


        </View>
    )
}

export default ProfileBody

const styles = StyleSheet.create({
    body_item_container: {
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center',
      },
      body_item_text: {
        color: colors.primary,
        fontSize: 16,
      },
      body: {
        gap: 12,
      },
      delete_button:{
        flexDirection:'row',
        alignItems:'center',
        gap:3,
      },
      delete_text:{
        fontWeight : 'bold',
        color: colors.primary,
      },
})