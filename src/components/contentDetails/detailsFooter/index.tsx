import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import Ant from 'react-native-vector-icons/AntDesign'
import styles from "../styles"
import { colors } from '../../../styles/colors'

const ContentDetailsFooter = () => {
  return (
    <View style={styles.bottom_content}>


    <TouchableOpacity style={styles.bottom_content_button}>
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
