import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoginForm from '../components/Auth/LoginForm'
import UserData from '../components/Auth/UserData'
import useAuth from '../hooks/useAuth'

const Account = () => {

  const { auth } = useAuth()
  console.log('auth', auth)
  return (
    <View>
      {auth
        ? <UserData />
        : <LoginForm />
      }
    </View>
  )
}

export default Account