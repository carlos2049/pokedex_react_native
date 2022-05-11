import { createStackNavigator } from '@react-navigation/stack'
import Account from '../screens/Account'

const Stack = createStackNavigator()

const AccountNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Account' component={Account} options={{
        title: ' Mi cuenta'
      }} />
    </Stack.Navigator>
  )
}

export default AccountNavigation