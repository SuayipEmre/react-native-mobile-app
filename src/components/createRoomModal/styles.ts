import { Dimensions, StyleSheet } from "react-native"
import { colors } from "../../styles/colors"

const { width, height } = Dimensions.get('window')
export default StyleSheet.create({
    modalView: {
        height: height * 0.5,
        backgroundColor: colors.third,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,

    },
    title: {
        color: colors.primary,
        marginTop: 6,
        marginBottom: 60,
    },
    roomname_label: {
        color: colors.secondary,
        fontSize: 14,
        fontWeight: '500'
    },
    close_modal_button: {
        position: 'absolute',
        top: 5,
        right: 10,
    },
    create_room_button_container:{
        width : '100%',
        alignItems:'flex-end',
        paddingEnd : 20
    },
    create_room_button: {
        width: width * 0.3,
        height: height * 0.04,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
})