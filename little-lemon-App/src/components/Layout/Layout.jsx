import React, { useState } from 'react'

import { View, ScrollView } from 'react-native'

import { styles } from './Layout.styles'


export const Layout = ({ children }) => {

  const [heigth, setHeight] = useState(0)
  return (
    <View
      style={styles.container}
      onLayout={({ nativeEvent }) => {
        setHeight(nativeEvent.layout.height)
      }}>
      <ScrollView style={{ minHeight: heigth }} contentContainerStyle={{ minHeight: heigth }} >
        {children}
      </ScrollView>
    </View>
  )
}