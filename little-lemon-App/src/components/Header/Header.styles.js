import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    height: 64,
    width: '100%',
    backgroundColor: '#dee3e9',
    disaply: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
  },
  image: {
    height: 42,
    width: 42,
    marginRight: 8,
  },
  text: {
    fontSize: 24,
    fontFamily: 'Arial'
  },
  pressable:{
    width: 42,
    height:42
  }
})