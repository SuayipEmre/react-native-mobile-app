import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ant from 'react-native-vector-icons/AntDesign'
import { colors } from '../../../styles/colors'


const ProfileBody = () => {
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
})