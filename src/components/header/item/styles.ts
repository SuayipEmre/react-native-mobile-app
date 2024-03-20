import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";
import{commonStyles} from '../../../styles/commonStyle'
export default StyleSheet.create({
    container: {
        borderWidth: 1,
        paddingVertical: 4,
        paddingHorizontal: 6,
        ...commonStyles.centerElements,
        borderRadius: 10,
        borderColor: colors.secondary
    },

    item: {
        fontSize: 13,
        fontWeight: '500',
        color: colors.primary
    },
    button:{
        flexDirection:'row',
        alignItems:'center',
        gap:12,
    },
})