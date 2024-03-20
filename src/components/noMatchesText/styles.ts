import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export default StyleSheet.create({
    container: {
      backgroundColor: colors.third,
      flex: 1,
    },
    no_matches_text: {
      color: colors.secondary,
      alignSelf: 'center',
      marginVertical: 15,
    },
  })