
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ContentVideoItem, ContentVideosTypes, } from '../../../types/ContentVideos'
import YoutubePlayer from "react-native-youtube-iframe"
import { colors } from '../../../styles/colors'


type ContentVideosPropsType = {
  videos: ContentVideosTypes['results']
}
const ContentVideos: React.FC<ContentVideosPropsType> = ({ videos }) => {



  return (
    <View>
      {
        videos.map((item: ContentVideoItem) => (
          <View key={item.id}>
            <View style={styles.info_container}>
              <Text style={styles.video_name} numberOfLines={2} ellipsizeMode="tail">{item.name}</Text>
              <Text style={styles.video_type}>{item.type}</Text>
            </View>
            <YoutubePlayer
              height={300}
              videoId={item.key}
            />
          </View>
        ))
      }
    </View>
  )
}

export default ContentVideos

const styles = StyleSheet.create({
  info_container: {
    width :'100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom : 10,
  },
  video_name: {
    color: colors.primary,
    fontSize:16,
    fontWeight :'600',
    width :'80%',

  },
  video_type: {
    color: colors.secondary,
    width :'20%',
  }
})