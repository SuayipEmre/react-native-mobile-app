import AsyncStorage from "@react-native-async-storage/async-storage";



export const getLanguagePreference = async () => {
    try {
        const userData = await AsyncStorage.getItem('languagePreference');
        return JSON.parse(userData as string);
    } catch (error) {
        console.log("error ", error)
        return null
    }
}