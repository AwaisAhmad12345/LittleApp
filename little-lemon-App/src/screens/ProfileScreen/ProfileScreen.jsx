import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { View, Text, Pressable, TextInput } from 'react-native'


import { Header } from '../../components/Header'
import { Layout } from '../../components/Layout'
import { useUserContext } from '../../services/UserContext'
import { styles } from './ProfileScreen.styles'

export const ProfileScreen = ({ }) => {

  const navigation = useNavigation()

  const { updateUser, email, firstName, lastName, phoneNumber,
    setMail, setFirstName, setLastName, setPhoneNumber, } = useUserContext()


  const onSubmit = () => {
    updateUser()
    navigation.goBack()
  }

  return (
    <React.Fragment>
      <Header />
      <Layout>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>First Name</Text>
            <TextInput
              style={styles.input}
              value={firstName}
              onChangeText={text => setFirstName(text)}
              placeholder="Enter your first name"
            />
            <Text style={styles.text}>Last Name</Text>
            <TextInput
              style={styles.input}
              value={lastName}
              onChangeText={text => setLastName(text)}
              placeholder="Enter your last name"
            />
            <Text style={styles.text}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={text => setMail(text)}
              type="email"
              placeholder="Enter your mail"
            />
            <Text style={styles.text}>Phone Number</Text>
            <TextInput
              style={styles.input}
              value={phoneNumber}
              onChangeText={text => setPhoneNumber(text)}
              type="phonenumber"
              placeholder="Enter your phone number"
            />

          </View>
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