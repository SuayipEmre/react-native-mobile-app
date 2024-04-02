import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.third,

  },


  textInput: {
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    color: colors.primary,
    paddingHorizontal: 20,

  },
  profile_photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },


  message_container: {

  },
  message_owner_container: {
    width: '100%',
    backgroundColor: '#0300A3',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    gap: 8,
    marginVertical: 10,
    paddingHorizontal: 12,
  },
  right_content: {
    width: '100%',
     gap: 5,
  },
  message: {
    flexDirection: 'row',
    gap: 8,
    marginVertical: 10,
    paddingHorizontal: 12,
  },
  message_time: {
    color: colors.secondary,
    fontSize: 10,
    fontWeight: '500'
  },

  right_content_top_content: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center'
  },
  message_owner_username:{
    color : colors.secondary,
    fontSize:13,
    fontWeight :'600'
  },
})