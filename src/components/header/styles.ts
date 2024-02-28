import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { commonStyles } from '../../styles/commonStyle'

const { width, height } = Dimensions.get('window')


export default StyleSheet.create({
    header_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        marginVertical: 6,
        width: '100%',
        alignSelf: 'center',
        marginBottom: 12,
        gap:5,
    },
    title_container: {
        height: height * 0.04,
        ...commonStyles.centerElements
    },
    title: {
        color: colors.primary,
        fontSize: 18,
        fontWeight: 'bold',
        width: '100%',
    },
    icon_container: {
        height: height * 0.04,
        ...commonStyles.centerElements,

    },

    bottom_content: {
        flexDirection: 'row',
        gap: 10,
        paddingLeft: 5,
    },

})
