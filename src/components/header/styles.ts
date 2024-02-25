import { StyleSheet } from "react-native";


export default StyleSheet.create({
    header_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        marginVertical: 6,
        width : '100%',
        alignSelf:'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    bottom_content:{
        flexDirection:'row',
        gap:10,
        paddingLeft : 5,
    },
   
})
