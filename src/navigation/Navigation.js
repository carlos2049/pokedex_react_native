import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import FavoriteNavigation from './FavoriteNavigation'
import PokedexNavigation from './PokedexNavigation'
import AccountNavigation from './AccountNavigation'

const Tabs = createBottomTabNavigator()

const Navigation = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name='Account' component={AccountNavigation} options={{
        tabBarLabel: "Mi cuenta",
        tabBarIcon: ({ color, size }) => (
          <Icon name='user' color={color} size={size} />
        )
      }} />
      <Tabs.Screen name='Pokedex' component={PokedexNavigation} options={{
        tabBarLabel: '',
        tabBarIcon: () => renderPokeball()
      }} />
      <Tabs.Screen name="Favorite" component={FavoriteNavigation} options={{
        tabBarLabel: "Favoritos",
        tabBarIcon: ({ color, size }) => (
          <Icon name="heart" color={color} size={size} />
        )
      }} />
    </Tabs.Navigator>
  )
}

export default Navigation

const renderPokeball = () => {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{ width: 75, height: 75, top: -15 }}
    />
  )
}