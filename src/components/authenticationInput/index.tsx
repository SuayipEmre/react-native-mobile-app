import { TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../../styles/colors'
import styles from './styles'

type authInputPropsType = {
  isSecret: boolean,
  placeholder: string,
  value: string,
  setValue: (newValue: string) => void
}
const AuthenticationInput: React.FC<authInputPropsType> = ({ isSecret, placeholder, value, setValue }) => {

  return (
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
  )
}

export default AuthenticationInput

