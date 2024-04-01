import { Dimensions, StyleSheet } from "react-native"
import { colors } from "../../../../styles/colors"

const { height } = Dimensions.get('window')
export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#303030',
        height: height * 0.07,
        paddingHorizontal: 5,
    },
    item_side: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    item_text: {
        color: colors.primary,
        fontSize: 16,
    },
  
    language:{
        fontSize : 12,
        color: colors.primary,
        fontWeight : '500'
    },

})