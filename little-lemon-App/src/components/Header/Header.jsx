import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { View, Text, Pressable, Image } from 'react-native'
import { useUserContext } from '../../services/UserContext'
import { Avatar } from '../Avatar'
import { styles } from './Header.styles'

const IMAGE = require("../../../assets/lemon.png")

export const Header = ({ }) => {

  const navigation = useNavigation()
  const { isOnboardingComplete } = useUserContext()

  const onAvatarPress = () => {
    navigation.navigate("Profile")
  }

  return (
    <View style={styles.container}>
      {navigation.canGoBack() ? <Pressable style={styles.pressable}>

      </Pressable> : <View style={styles.pressable} />}
      <View style={styles.logo}>
        <Image style={styles.image} source={IMAGE} resizeMode="contain" />
        <Text style={styles.text}>LITTLE LEMON</Text>
      </View>
      {isOnboardingComplete ? <Pressable onPress={onAvatarPress} style={styles.pressable}>
        <Avatar />
      </Pressable> : <View style={styles.pressable} />}
    </View>
  )
}