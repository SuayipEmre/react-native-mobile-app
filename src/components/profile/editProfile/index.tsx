import { Alert, Image, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../styles/colors'
import { useEditProfileModalVisible } from '../../../store/features/modals/editProfileModal/hooks'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { launchImageLibrary, ImageLibraryOptions, ImagePickerResponse, launchCamera, CameraOptions } from 'react-native-image-picker';
import { setIsEditProfileModalVisible } from '../../../store/features/modals/editProfileModal/actions'
import Evil from 'react-native-vector-icons/EvilIcons'
import styles from './styles'
import firestore from '@react-native-firebase/firestore';


const EditProfile: React.FC = () => {

    const currentUser: FirebaseAuthTypes.User | null = auth().currentUser
    const [userName, setUserName] = useState<string>(currentUser?.displayName ? currentUser?.displayName : '')
    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined)
    const modalVisible = useEditProfileModalVisible()



    const showAlert = () => (
        Alert.alert(
            'MM',
            'Which one do you want to use to edit your profile ? ',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Camera',
                    onPress: () => handleCameraLaunch(),
                    style: 'default',
                },
                {
                    text: 'Gallery',
                    onPress: () => openImagePicker(),
                    style: 'default',
                },

            ],
            {
                cancelable: true,
                onDismiss: () =>
                    Alert.alert(
                        'This alert was dismissed by tapping outside of the alert dialog.',
                    ),
            }

        )
    )
    const handleCloseModal = () => {
        setIsEditProfileModalVisible(false)
        setSelectedImage(undefined)
    }

    const handleCameraLaunch = () => {
        const options: CameraOptions = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        }

        launchCamera(options, (response: ImagePickerResponse) => {
            if (response.didCancel) {
                console.log('User cancelled camera');
                setIsEditProfileModalVisible(false)
            } else if (response.errorCode) {
                console.log('Camera Error: ', response.errorCode)
                setIsEditProfileModalVisible(false)
            } else {
                let imageUri = response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
            }
        })
    }

    const openImagePicker = (): void => {

        const options: ImageLibraryOptions = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        try {
            launchImageLibrary(options, (response: ImagePickerResponse) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                    setIsEditProfileModalVisible(false)
                } else if (response.errorCode) {
                    console.log('Image picker error: ', response.errorCode);
                    setIsEditProfileModalVisible(false)
                } else {
                    let imageUri = response.assets?.[0]?.uri;
                    setSelectedImage(imageUri);
                }
            })
        } catch {

        }
    }

    

    const handleUpdateProfile = async (): Promise<void> => {
        console.log(userName);
        
        const update = {
            displayName: userName,
            photoURL: selectedImage,
        };

        try {
            await currentUser?.updateProfile(update)
            await updateUserInfoFromDB()
            setUserName('')
            setSelectedImage('')
            setIsEditProfileModalVisible(false)

        } catch (e) {
            console.log(e)

        }
    }




    const updateUserInfoFromDB = async () => {
        const updatedInformations = {
            displayName: userName,
            photoURL: selectedImage,
        };

        try{
            const dbRef = firestore().collection('users').doc(currentUser?.uid)
            await dbRef.update(updatedInformations)
        }catch(e){
            console.log('what is the error ', e);
            
        }
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >

            <View style={styles.modal_container}>
                <View style={styles.modal_View}>

                    <Evil name='close' color={colors.primary} size={24} style={styles.close_icon} onPress={handleCloseModal} />

                    <TouchableOpacity onPress={showAlert} style={styles.image_container}>
                        {
                            currentUser?.photoURL && selectedImage == undefined ?
                                <Image source={{ uri: currentUser?.photoURL }} style={styles.image} /> :

                                selectedImage ? <Image source={{ uri: selectedImage }} style={styles.image} /> :

                                    <Image source={require('../../../assets/anonymousUser.png')} style={styles.image} />
                        }
                    </TouchableOpacity>

                    <TextInput
                        value={userName}
                        onChangeText={setUserName}
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={false}
                        placeholderTextColor='#eee8'
                        placeholder='Type your new username'
                        selectionColor={colors.primary}
                        style={styles.input} />

                    <View style={styles.button_container} >
                        <TouchableOpacity style={styles.save_button} disabled={userName.length < 6} onPress={handleUpdateProfile}>
                            <Text style={styles.save_button_text}>Save</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>



        </Modal>
    )
}

export default EditProfile
