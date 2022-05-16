import AsyncStorage from '@react-native-async-storage/async-storage'
import { includes, pull } from 'lodash'
import { FAVORITE_STORAGE } from '../utils/constants'

export const getPokemonsFavoritesApi = async () => {
  try {
    const res = await AsyncStorage.getItem(FAVORITE_STORAGE)
    return JSON.parse(res || [])
  } catch (error) {
    throw error
  }
}

export const addPokemonFavoriteApi = async (id) => {
  try {
    const favorites = await getPokemonsFavoritesApi()
    favorites.push(id)
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
  } catch (error) {
    throw error
  }
}

