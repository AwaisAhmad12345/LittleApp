import React, { createContext, useContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const KEY_USER = '@user_key'

export const UserContext = createContext({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  setFirstName: () => { },
  setLastName: () => { },
  setPhoneNumber: () => { },
  seMail: () => { },
  setIsLoaded: () => { },
  isLoaded: false

});

export const UserContextProvider = ({ children }) => {

  const [email, setMail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <React.Fragment>
      <UserContext.Provider value={{
        email, firstName, lastName, phoneNumber,
        setMail, setFirstName, setLastName, setPhoneNumber,
        isLoaded, setIsLoaded
      }}>
        {children}
      </UserContext.Provider>
    </React.Fragment>
  )
}


export const useUserContext = () => {

  const { email, firstName, lastName, phoneNumber,
    setMail, setFirstName, setLastName, setPhoneNumber,
    isLoaded, setIsLoaded
  } = useContext(UserContext)

  const submitUser = async () => {
    await AsyncStorage.setItem(KEY_USER, JSON.stringify({
      email, firstName
    }))
    setIsLoaded(true)
  }

  const updateUser = async () => {
    await AsyncStorage.mergeItem(KEY_USER, JSON.stringify({
      email, firstName, lastName, phoneNumber
    }))
  }

  const loadUser = async () => {
    try {
      const user = await JSON.parse(await AsyncStorage.getItem(KEY_USER))
      setFirstName(user.firstName || '')
      setMail(user.email  || '')
      setLastName(user.lastName || '')
      setPhoneNumber(user.phoneNumber || '')
      setIsLoaded(true)
    } catch (e) {
      console.log('Failed to load', e)
    }
  }


  return {
    email, firstName, lastName, phoneNumber,
    setFirstName, setLastName, setPhoneNumber, setMail,
    submitUser, updateUser, loadUser,
    isOnboardingComplete: isLoaded
  }
}