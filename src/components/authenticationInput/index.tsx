import { Dimensions, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../../styles/colors'

type authInputPropsType = {
    isSecret : boolean,
    placeholder:string,
    value:string,
    setValue : (newValue : string) => void
}
const AuthenticationInput : React.FC<authInputPropsType> = ({isSecret, placeholder, value, setValue}) => {
  return (
    <View>
      <TextInput 
      value={value}
      autoCapitalize='none'
      autoCorrect={false}
      secureTextEntry={isSecret}
      placeholderTextColor='#eee8'
      placeholder={placeholder}
      selectionColor={colors.primary}
      onChangeText={setValue}
      style={styles.input} />
    </View>
  )
}

export default AuthenticationInput

const{width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        borderColor : colors.primary,
        width : width * 0.8,
        height : height * 0.05,
        paddingHorizontal: 15,
        color:colors.primary,
        marginVertical: 8,
    },
})