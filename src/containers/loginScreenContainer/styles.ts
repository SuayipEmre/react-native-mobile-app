import { Dimensions, StyleSheet } from "react-native"
import { colors } from "../../styles/colors"
import{commonStyles} from '../../styles/commonStyle'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  logo:{
    width : width * 0.8,
    height : height * 0.2,
    resizeMode :'cover'
  },
  body: {
    width: width * 0.8,
    alignItems: 'flex-end',
    marginTop: 15,
    gap: 14,
  },
  login_button: {
    ...commonStyles.centerElements,
    backgroundColor: '#292928',
    width: width * 0.3,
    height: height * 0.04,

  },
  login_button_text: {
    color: colors.primary,
  },
  signup_button: {
    position:'absolute',
    bottom: 50,
  },
  signup_button_content:{
    flexDirection:'row',
    alignItems:'center',
    gap:6,
  },
  account_text: {
    color: colors.primary,

  },
  signup_text: {
    color: '#0070BB',
    fontWeight : '500'
  }
})