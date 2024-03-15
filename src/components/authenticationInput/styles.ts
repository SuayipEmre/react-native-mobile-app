import { Dimensions, StyleSheet } from "react-native"
import { colors } from "../../styles/colors"

const{width, height} = Dimensions.get('window')

export default StyleSheet.create({
    input:{
        borderBottomWidth: 1,
        borderBottomColor : colors.secondary,
        width : width * 0.8,
        height : height * 0.05,
        paddingHorizontal: 15,
        color:colors.primary,
        marginVertical: 8,
    },
})