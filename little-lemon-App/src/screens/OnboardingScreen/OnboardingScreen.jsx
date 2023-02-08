import React from 'react'

import { TextInput, View, Text } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

import { Header } from '../../components/Header'
import { Layout } from '../../components/Layout'
import { useUserContext } from '../../services/UserContext'
import { styles } from './OnboardingScreen.styles'


export const OnboardingScreen = ({ }) => {

  const { submitUser, firstName, email, setFirstName, setMail } = useUserContext()

  const onSubmit = () => {
    submitUser()
  }

  return (
    <React.Fragment>
      <Header />
      <Layout>
        <View style={styles.container}>
          <Text style={styles.text}>Let us get to know you</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>First Name</Text>
            <TextInput
              style={styles.input}
              value={firstName}
              onChangeText={text => setFirstName(text)}
              placeholder="Enter your name"
            />
            <Text style={styles.text}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={text => setMail(text)}
              placeholder="Enter your email"
            />
          </View>
          <View />
          <Pressable
            style={(pressed) => {
              return { ...styles.pressable, opacity: pressed ? 0.6 : 1 }
            }}
            onPress={onSubmit}
          >
            <Text style={styles.text}>Submit</Text>
          </Pressable>
        </View>
      </Layout>
    </React.Fragment>
  )
}