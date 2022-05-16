import { View, Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getPokemonsFavoritesApi } from '../api/favorite'

const Favorite = () => {

  const checkFavorites = async () => {

    const res = await getPokemonsFavoritesApi()
    console.log(res);
  }

  return (
    <SafeAreaView>
      <Text>favorite</Text>
      <Button title='Obtener favoritos' onPress={checkFavorites} />
    </SafeAreaView>
  )
}

export default Favorite