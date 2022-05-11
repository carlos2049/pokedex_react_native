import { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getPokemonsApi, getPokemonDatailsByUrlApi } from '../api/pokemon'
import PokemonList from '../components/PokemonList'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    (async () => {
      await loadPokemon()
    })()
  }, [])

  const loadPokemon = async () => {
    try {
      const res = await getPokemonsApi()
      const pokemonArr = []
      for await (const pokemon of res.results) {
        const pokemonDetails = await getPokemonDatailsByUrlApi(pokemon.url)
        pokemonArr.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          imagen: pokemonDetails.sprites.other['official-artwork'].front_default
        })
      }

      setPokemons([...pokemons, ...pokemonArr])

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} />
    </SafeAreaView>
  )
}

export default Pokedex