import { useState, useCallback } from 'react'
import { View, Text, Button } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { getPokemonsFavoritesApi } from '../api/favorite'
import { getPokemonDetailsApi } from '../api/pokemon'
import useAuth from '../hooks/useAuth'
import PokemonList from '../components/PokemonList'

const Favorite = () => {

  const [pokemons, setPokemons] = useState([])
  const { auth } = useAuth()

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const res = await getPokemonsFavoritesApi()
          const pokemonArr = []
          for await (const id of res) {
            const pokemonDetails = await getPokemonDetailsApi(id)
            pokemonArr.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              imagen: pokemonDetails.sprites.other['official-artwork'].front_default
            })
          }
          setPokemons(pokemonArr)
        })()
      }
    }, [auth])
  )


  return (
    !auth ? <Text>usuario no logado</Text> : <PokemonList pokemons={pokemons} />
  )
}

export default Favorite