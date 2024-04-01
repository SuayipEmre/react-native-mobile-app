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
        paddingVertical : 12,
        borderTopWidth :0.3,
        borderLeftWidth : 0.3,
        borderRightWidth : 0.3,
        borderColor : '#fff',
        borderRadius :12,

    },
    title: {
        color: colors.primary,
        marginTop: 6,
        marginBottom: 60,
    },

    close_modal_button: {
        position: 'absolute',
        top: 5,
        right: 10,
    },
    input:{
        borderWidth :1,
        borderColor :'#fff',
        borderRadius : 8,
        width : width * 0.9,
        height : height * 0.05,
        paddingHorizontal : 5,
        color : colors.primary,
    },
    create_room_button_container:{
        width : width * 0.9,
        alignItems:'flex-end',
        marginTop:10,
    },
    create_room_button: {
        width: width * 0.3,
        height: height * 0.04,
        borderWidth :1,
        borderRadius : 8,
        borderColor : '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button_text:{
        color : colors.primary,
    },
})