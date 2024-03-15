import { Image, View } from 'react-native'
import React from 'react'
import styles from "../styles"


type ContentDetailImagePropsType = {
    backdrop_path :string | undefined
}
const ContentDetailImage  : React.FC<ContentDetailImagePropsType> = ({backdrop_path}) => {
    return (
        <View style={styles.image_container}>
            <Image source={{ uri: `${process.env.IMAGE_PATH}/${backdrop_path}` }} style={styles.image} />
        </View>
    )
}

export default ContentDetailImage
