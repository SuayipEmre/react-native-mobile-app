import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export default StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.third,

  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    position:'absolute',
    bottom:0,
    right:0,
    left:0,
    backgroundColor:'#303030'

    
  },

  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
    color:colors.primary,
  },
  profile_photo:{
    width : 50,
    height : 50,
    borderRadius : 25,
  },

})