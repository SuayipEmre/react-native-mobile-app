import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { commonStyles } from '../../styles/commonStyle'

const { width, height } = Dimensions.get('window')
export default StyleSheet.create({
    modalView: {
        backgroundColor: colors.third,
        shadowColor: colors.primary,
        width: width,
        height: height,
        ...commonStyles.centerElements
    },
    genre_button: {
        marginBottom: 12,
    },
    genre_text: {
        fontSize: 20,
        color: '#fff',
    },

});