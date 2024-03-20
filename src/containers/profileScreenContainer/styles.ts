import { Dimensions, StyleSheet } from "react-native"

const { width } = Dimensions.get('window')

export default StyleSheet.create({
    wrapper: {
        width: width * 0.9,
        gap: 12,
        flex: 1,
      },
})