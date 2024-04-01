import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { ReactNode } from 'react'
import { colors } from '../../../../styles/colors'
import Ant from 'react-native-vector-icons/AntDesign'
import i18n from '../../../../i18n'
import styles from './styles'

type ProfileSectionItemPropsTypes = {
    onPress?: () => void
    icon: ReactNode,
    text: string,
    isChangeLanguageSection? : boolean
}

const ProfileSectionItem: React.FC<ProfileSectionItemPropsTypes> = ({ icon, onPress, text, isChangeLanguageSection }) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.item_side}>
                {icon}
                <Text style={styles.item_text}>{text}</Text>
            </View>

            <View style={styles.item_side}>
                {isChangeLanguageSection && <Text style={styles.language}>{i18n.language}</Text>}
                <Ant name='right' color={colors.primary} size={16} />
            </View>
        </TouchableOpacity>

    )
}

export default ProfileSectionItem

