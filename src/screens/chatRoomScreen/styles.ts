import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export default StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.third,

  },
 

  textInput: {
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    color:colors.primary,
    paddingHorizontal :20,

  },
  profile_photo:{
    width : 50,
    height : 50,
    borderRadius : 25,
  },

})