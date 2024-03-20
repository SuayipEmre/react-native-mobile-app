import { Dimensions, StyleSheet } from "react-native"

const { width } = Dimensions.get('screen')
export default StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent : 'space-between',
        gap:10,
    },
    button_container:{
        flexDirection :'row',
        alignItems:'center',
        gap:10,
        width : width * 0.3,
        justifyContent:'center',
        paddingVertical:6,
        borderRadius: 10,
    },
})