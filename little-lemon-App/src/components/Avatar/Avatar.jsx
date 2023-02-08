import React from 'react'
import { View , Text } from 'react-native'
import { useUserContext } from '../../services/UserContext'
import { styles } from './Avatar.styles'


export const Avatar = () => {

  const { firstName, lastName } = useUserContext()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`${(firstName || '')[0].toUpperCase()} ${(lastName[0] || '').toUpperCase()}`}</Text>
    </View>
  )
}