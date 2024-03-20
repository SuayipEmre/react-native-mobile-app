import { Dimensions, StyleSheet } from "react-native"
import { colors } from "../../styles/colors"

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        backgroundColor: colors.third,
        flex: 1,
    },

    content_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        marginVertical: 10,
    },
    left_side: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    image: {
        width: width * 0.4,
        height: height * 0.17,
        resizeMode: 'stretch',
        borderRadius: 8,
    },
    content_name: {
        color: colors.primary,
        fontWeight: '500',
        width: '50%'
    },
})