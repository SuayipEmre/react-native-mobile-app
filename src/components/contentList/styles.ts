import { Dimensions, StyleSheet } from "react-native"

const { width, height } = Dimensions.get('window')
export default StyleSheet.create({
    container: {
        margin: 5,
        borderRadius: 16,
    },
    title: {},
    image: {
        width: width * 0.3,
        height: height * 0.2,
        borderRadius: 16,
    },
})