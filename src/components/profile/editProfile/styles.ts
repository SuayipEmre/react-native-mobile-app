import { Dimensions, StyleSheet } from "react-native"
import { colors } from "../../../styles/colors"
import { commonStyles } from "../../../styles/commonStyle"

const { width, height } = Dimensions.get('window')


export default StyleSheet.create({
    modal_container: {
        flex: 1,
        ...commonStyles.centerElements,

    },
    modal_View: {
        backgroundColor: colors.third,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: colors.primary,
        width: width * 0.8,
        height: height * 0.8,
        alignItems: 'center',
        paddingVertical: 12,
    },
    close_icon:{
        alignSelf:'flex-end',
        paddingHorizontal: 12,
    },
    image_container: {
        width: '80%',
        height: '40%',
        marginTop : 14,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    input: {
        borderWidth: 1,
        borderColor: colors.primary,
        width: '80%',
        paddingVertical: 10,
        marginTop: 15,
        height: '10%',
        paddingHorizontal: 4,
        color: colors.primary
    },
    button_container: {
        width: '80%',
        height: '10%',
        alignItems: 'flex-end'
    },
    save_button: {
        width: '50%',
        height: '60%',
        backgroundColor: colors.secondary,
        marginTop: 15,
        ...commonStyles.centerElements


    },
    save_button_text: {
        color: colors.primary,
    },

})