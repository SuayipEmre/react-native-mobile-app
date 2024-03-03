import { Image, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../styles/colors'
import { useEditProfileModalVisible } from '../../../store/features/modals/editProfileModal/hooks'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { launchImageLibrary, ImageLibraryOptions, ImagePickerResponse } from 'react-native-image-picker';
import { setIsEditProfileModalVisible } from '../../../store/features/modals/editProfileModal/actions'
import Evil from 'react-native-vector-icons/EvilIcons'
import styles from './styles'

const EditProfile: React.FC = () => {
    
    const [userName, setUserName] = useState<string>('')
    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined)
    const modalVisible = useEditProfileModalVisible()

    const currentUser: FirebaseAuthTypes.User | null = auth().currentUser


    const openImagePicker = (): void => {
        const options: ImageLibraryOptions = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response: ImagePickerResponse) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('Image picker error: ', response.errorCode);
            } else {
                let imageUri = response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
            }
        })
    }

    const handleUpdateProfile = async (): Promise<void> => {
        const update = {
            displayName: userName,
            photoURL: selectedImage,
        };

        try {
            await currentUser?.updateProfile(update)
            console.log('Well Done !');
            setUserName('')
            setSelectedImage('')
            setIsEditProfileModalVisible(false)

        } catch (e) {
            console.log(e)

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

                    <Evil name='close' color={colors.primary} size={24} style={styles.close_icon} onPress={() => setIsEditProfileModalVisible(false)} />

                    <TouchableOpacity onPress={openImagePicker} style={styles.image_container}>
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
