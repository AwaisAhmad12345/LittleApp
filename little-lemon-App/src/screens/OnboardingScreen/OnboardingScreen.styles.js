import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 64
  },
  input: {
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'solid',
    width: "100%",
    height: 42,
    paddingHorizontal: 8,
    marginTop: 12,
    marginBottom: 32
  },
  pressable: {
    position: 'absolute',
    bottom: 42,
    borderRadius: 12,
    backgroundColor: '#dee3e9',
    padding: 12
  },
  inputContainer: {
    height: Dimensions.get('window').height / 3,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})