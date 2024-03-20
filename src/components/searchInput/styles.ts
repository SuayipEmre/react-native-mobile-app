import { Dimensions, StyleSheet } from "react-native"
import { colors } from "../../styles/colors"

const {width,  height } = Dimensions.get('window')
export default StyleSheet.create({

    container:{
       flex:1,

    },
    input: {
        color: colors.primary,
        zIndex: 12,
        width : width * 0.7,
        height: height *0.04,
        borderColor: colors.secondary,
        borderWidth :1,
        borderRadius : 12,
        paddingHorizontal: 12,
    }
})