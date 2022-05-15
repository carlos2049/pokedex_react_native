import { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Button, Keyboard } from 'react-native'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { user, userDatails } from '../../utils/UserDB'

const LoginForm = () => {

  const [error, setError] = useState('')
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => validateUser(formValue)
  })

  const validateUser = (formValue) => {
    setError('')
    const { username, password } = formValue
    if (username !== user.username || password !== user.password) {
      setError('el usuario o contraseña incorrectas')
    } else {
      console.log('login correcto');
      console.log(userDatails);
    }
  }

  return (
    <View>
      <Text style={styles.title}>Iniciar sesion</Text>
      <TextInput
        placeholder='Nombre de usuario'
        style={styles.input}
        autoCapitalize='none'
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <TextInput
        placeholder='Contraseña'
        style={styles.input}
        autoCapitalize='none'
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <Button
        title='Entrar'
        onPress={formik.handleSubmit} // handleSubmit activa el onSubmit de formik
      />
      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  )
}

export default LoginForm

const initialValues = () => {
  return {
    username: '',
    password: ''
  }
}

const validationSchema = () => {
  return {
    username: Yup.string().required('El usuario es obligatorio'),
    password: Yup.string().required('la constraseña es olbogatioria')
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    marginTop: 20
  }
})