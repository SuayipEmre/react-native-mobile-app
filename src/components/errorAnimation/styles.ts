import { Dimensions, StyleSheet } from "react-native"
import { colors } from "../../styles/colors"

const{height} = Dimensions.get('window')
export default StyleSheet.create({
    container:{
     backgroundColor: colors.third,
      height : height,
      alignItems :'center',
      justifyContent :'center'
    },
  })