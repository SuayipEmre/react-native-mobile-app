import { Dimensions, StyleSheet } from "react-native"
import { colors } from "../../../styles/colors"

const { width, height } = Dimensions.get('window')

export default  StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: height * 0.17,
    justifyContent: 'space-between',
    borderBottomColor: '#eee',
    borderBottomWidth: .4,
    marginTop:15,
    paddingBottom :12,
},
  header_left_side: {
    flexDirection: 'row',
    gap: 12,
  },

  image_container: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: width * 0.15
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: width * 0.15
  },
  user_info_container: {},
  user_name: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '500'
  },
  user_email: {
    color: colors.primary,
    fontWeight: '300',
    marginTop: 8,
    fontSize: 13,
  },
  edit_icon_container: {}, 
})