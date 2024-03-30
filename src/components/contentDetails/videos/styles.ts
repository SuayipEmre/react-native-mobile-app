import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export default StyleSheet.create({
    video_container:{
      marginBottom:5,
    },
    info_container: {
      width :'100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      marginBottom : 10,
    },
    video_name: {
      color: colors.primary,
      fontSize:16,
      fontWeight :'600',
      width :'80%',
      alignItems:'center',
    },
    video_type: {
      color: colors.secondary,
      width :'20%',
      alignItems:'center',
    }
  })