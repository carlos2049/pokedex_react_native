import { View, Text, FlatList, StyleSheet } from 'react-native'
import PokemonCard from './PokemonCard'

const PokemonList = ({ pokemons }) => {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      // contentContainerStyle={styles.flatListContentContainer}
      contentContainerStyle={styles.flatListContentContainer}
    />
  )
}


const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 3
  }
})

export default PokemonList