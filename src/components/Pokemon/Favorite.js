import { useState, useEffect } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { addPokemonFavoriteApi, isPokemonFavorite } from '../../api/favorite'

const Favorite = ({ id }) => {

  const [isFavorite, setIsFavorite] = useState(undefined)
  const [reloadCheck, setReloadCheck] = useState(false)
  const Icon = isFavorite ? FontAwesome : FontAwesome5

  useEffect(() => {
    (async () => {
      try {
        const res = await isPokemonFavorite(id)
        console.log('jsdad', res);
        setIsFavorite(res)
      } catch (error) {
        setIsFavorite(false)
      }
    })()
  }, [id, reloadCheck])

  const onReloadCheckFavorite = () => {
    setReloadCheck((prev) => !prev)
  }

  const addFavorite = async () => {
    try {
      await addPokemonFavoriteApi(id)
      onReloadCheckFavorite()
    } catch (error) {
      throw error
    }
  }
  const removeFavorite = () => {
    console.log('eliminar');
  }

  return (
    <Icon name='heart' color='#fff' size={20} onPress={isFavorite ? removeFavorite : addFavorite} style={{ marginRight: 20 }} />

  )
}

export default Favorite