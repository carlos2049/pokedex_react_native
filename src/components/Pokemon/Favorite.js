import Icon from 'react-native-vector-icons/FontAwesome5'
import { addPokemonFavoriteApi, getPokemonsFavoritesApi } from '../../api/favorite'

const Favorite = ({ id }) => {

  const addFavorite = async () => {
    try {
      await addPokemonFavoriteApi(id)
    } catch (error) {
      throw error
    }
  }
  const getFav = async () => {
    const res = await getPokemonsFavoritesApi()
    console.log(res);
  }

  return (
    <Icon name='heart' color='#fff' size={20} onPress={addFavorite} style={{ marginRight: 20 }} />

  )
}

export default Favorite