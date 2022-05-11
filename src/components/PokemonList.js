import { View, Text, FlatList, StyleSheet } from 'react-native'

const PokemonList = ({ pokemons }) => {
  console.log('pokemons', pokemons)
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <Text>{item.name}</Text>}
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