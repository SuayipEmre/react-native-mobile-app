import {  Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AuthenticationInput from '../../components/authenticationInput'
import styles from './styles'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { AuthenticationNavigatorStackParamList } from '../../navigators/types'


type LoginScreenContainerPropsType = {
    
    handleLogin : () => void,
    setEmail : (email : string) => void,
    setPassword : (password : string) => void,
    email : string
    password : string
}
const LoginScreenContainer : React.FC<LoginScreenContainerPropsType> = ({handleLogin, email, password, setEmail, setPassword}) => {
    
    const navigation = useNavigation<NavigationProp<AuthenticationNavigatorStackParamList>>()

    return (
        <View style={styles.container}>

            <Image source={require('../../assets/logo.png')} style={styles.logo} />

            <AuthenticationInput value={email} setValue={setEmail} isSecret={false} placeholder='Email' />
            <AuthenticationInput value={password} setValue={setPassword} isSecret placeholder='Password' />


            <View style={styles.body}>

                <TouchableOpacity style={styles.login_button} onPress={handleLogin}>
                    <Text style={styles.login_button_text}>Login</Text>
                </TouchableOpacity>

            </View>




            <TouchableOpacity
                style={styles.signup_button}
                onPress={() => navigation.navigate('SignupScreen')}
            >

                <View style={styles.signup_button_content}>
                    <Text style={styles.account_text}> Don't have an account? </Text>

                    <Text style={styles.signup_text}>Sign up</Text>
                </View>


            </TouchableOpacity>
        </View>
    )
}

export default LoginScreenContainer
