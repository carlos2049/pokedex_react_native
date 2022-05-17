import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const NoLogged = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.content}>
      <Text style={styles.text}>Para ver esta pantalla tienes que iniciar sesion</Text>
      <Button title='Ir al loggin' onPress={() => navigation.navigate('Account')} />
    </View>
  )
}
export default NoLogged

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 50
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,

  }
})