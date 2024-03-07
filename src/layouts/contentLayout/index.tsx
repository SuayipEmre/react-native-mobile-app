import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const { width } = Dimensions.get('screen')

type contentLayoutTypes = {
  children: React.ReactNode
}
const ContentLayout: React.FC<contentLayoutTypes> = ({ children }) => {
  return (
    <View style={{ width: width * 0.9 }}>
      {
        children
      }
    </View>
  )
}

export default ContentLayout

const styles = StyleSheet.create({})