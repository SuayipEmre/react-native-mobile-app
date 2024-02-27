import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../styles/colors";

const { width } = Dimensions.get("window")

export default StyleSheet.create({
    container: {
        margin:12,
        width: width * 0.45,
    
    },
    image: {
        width:'100%',
        height : '100%',
        borderRadius : 12,
    },
})