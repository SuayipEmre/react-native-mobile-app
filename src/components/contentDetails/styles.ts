import { Dimensions, StyleSheet } from "react-native"
import { colors } from "../../styles/colors"
import { commonStyles } from "../../styles/commonStyle"
const { width, height } = Dimensions.get('window')

export default  StyleSheet.create({
    image_container: {
        width: width,
        height: height * 0.3
    },
    image: {
        width: '100%',
        height: '100%'
    },
    body: {
        width: width * 0.95,
        alignSelf: 'center',
        paddingHorizontal: 12,
        gap: 18,
        marginTop: 8,
    },
    title: {
        color: colors.primary,
        fontSize: 25,
        fontWeight: '600',
    },
    top_content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    release_year: {
        color: '#eee',
        width: '20%',
    },
    tagline: {
        color: '#eee',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    runtime_info:{
        color: '#eee'
    },
    button: {
        ...commonStyles.centerElements,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        width: width,
        height: height * 0.05

    },
    play_text: {
        color: colors.third,
        fontSize: 18,
        fontWeight: '600',
    },
    overview: {
        color: colors.primary,
    },
    bottom_content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        width: '60%',
    },
    bottom_content_button: {
        alignItems: 'center'
    },
    bottom_content_text: {
        color: '#eee',
        fontSize: 14
    },


    border: {
        borderBottomColor: '#eee',
        borderBottomWidth: 0.3,
        marginTop: 12,
    },
    similar_container: {

    },
    similar_text: {
        color: '#fff',
        fontSize: 16,
        marginVertical: 14,
        marginLeft: 12,

    },

})