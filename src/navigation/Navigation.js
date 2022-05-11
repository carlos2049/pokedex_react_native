import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Account from '../screens/Account'
import Favorite from '../screens/Favorite'
import Pokedex from '../screens/Pokedex'

const Tabs = createBottomTabNavigator()

const Navigation = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name='Account' component={Account} />
      <Tabs.Screen name='Favorite' component={Favorite} />
      <Tabs.Screen name='Pokedex' component={Pokedex} />
    </Tabs.Navigator>
  )
}

export default Navigation