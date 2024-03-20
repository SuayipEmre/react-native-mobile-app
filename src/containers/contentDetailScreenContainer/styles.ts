import { Dimensions, StyleSheet } from "react-native"

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  button: {
    width: width * 0.3,
    height: height * 0.2,
    margin: 5,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    resizeMode: 'stretch'
  },

})