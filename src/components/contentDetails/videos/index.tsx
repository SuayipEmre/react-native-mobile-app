
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ContentVideoItem, ContentVideosTypes, } from '../../../types/ContentVideos'
import YoutubePlayer from "react-native-youtube-iframe"
import { colors } from '../../../styles/colors'
import Animated, { FadeInLeft } from 'react-native-reanimated'
import styles from './styles'

type ContentVideosPropsType = {
  videos: ContentVideosTypes['results']
}
const ContentVideos: React.FC<ContentVideosPropsType> = ({ videos }) => {



  return (
    <View>
      {
        videos.map((item: ContentVideoItem, index) => (
          <Animated.View key={item.id} style={styles.video_container}
          entering={FadeInLeft.delay(100 * index).duration(100).springify().damping(12)}
          >
            <View style={styles.info_container}>
              <Text style={styles.video_name} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
              <Text style={styles.video_type}>{item.type}</Text>
            </View>
            <YoutubePlayer
              height={300}
              videoId={item.key}
            />
          </Animated.View>
        ))
      }
    </View>
  )
}

export default ContentVideos

