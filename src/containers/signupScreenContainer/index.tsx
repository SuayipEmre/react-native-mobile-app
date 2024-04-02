import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AuthenticationInput from '../../components/authenticationInput'
import { commonStyles } from '../../styles/commonStyle'
import { AuthenticationNavigatorStackParamList } from '../../navigators/types'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { colors } from '../../styles/colors'


type SignupScreenContainerPropsType = {
    email: string,
    setEmail: (value: string) => void

    password: string,
    setPassword: (value: string) => void

    repassword: string,
    setRepassword: (value: string) => void

    handleSignUp: () => Promise<void>

}
const SignupScreenContainer: React.FC<SignupScreenContainerPropsType> = ({
    email,
    password,
    repassword,
    setEmail,
    setPassword,
    setRepassword,
    handleSignUp
}) => {


    const navigation = useNavigation<NavigationProp<AuthenticationNavigatorStackParamList>>()

    return (
        <>
            <Image source={require('../../assets/logo.png')} style={styles.logo} />


            <AuthenticationInput value={email} setValue={setEmail} isSecret={false} placeholder='Email' />
            <AuthenticationInput value={password} setValue={setPassword} isSecret placeholder='Password' />
            <AuthenticationInput value={repassword} setValue={setRepassword} isSecret placeholder='Password' />


            <View style={styles.body}>

                <TouchableOpacity style={styles.signup_button} onPress={handleSignUp}>
                    <Text style={styles.signup_button_text}>Sign up</Text>
                </TouchableOpacity>

            </View>


            <TouchableOpacity
                style={styles.login_button}
                onPress={() => navigation.navigate('LoginScreen')}
            >

                <View style={styles.signup_button_content}>
                    <Text style={styles.account_text}> Already have an account?</Text>

                    <Text style={styles.signup_text}>Sign in</Text>
                </View>


            </TouchableOpacity>
        </>
    )
}

export default SignupScreenContainer
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.third,
        alignItems: 'center'
    },

    logo: {
        width: width * 0.8,
        height: height * 0.2,
        resizeMode: 'cover'
    },

    body: {
        width: width * 0.8,
        alignItems: 'flex-end',
        marginTop: 15,
        gap: 14,
    },

    signup_button: {
        ...commonStyles.centerElements,
        backgroundColor: '#292928',
        width: width * 0.3,
        height: height * 0.04,

    },
    signup_button_text: {
        color: colors.primary
    },
    login_button: {
        position: 'absolute',
        bottom: 50,
    },
    signup_button_content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    account_text: {
        color: colors.primary,

    },
    signup_text: {
        color: '#0070BB',
        fontWeight: '500'
    }

})
