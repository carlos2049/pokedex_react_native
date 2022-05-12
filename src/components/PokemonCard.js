import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'


const PokemonCard = ({ pokemon }) => {
  console.log('pokemon', pokemon)
  const goTOPokemon = () => {
    console.log(`poemon ${pokemon.name}`)
  }
  return (
    <TouchableWithoutFeedback onPress={goTOPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={styles.bgStyles} >
            <Text style={styles.number} >#{`${pokemon.order}`.padStart(3, 0)}</Text>
            <Text style={styles.name} >{pokemon.name}</Text>
            <Image source={{ uri: pokemon.imagen }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130
  },
  spacing: {
    flex: 1,
    padding: 5
  },
  bgStyles: {
    backgroundColor: 'grey'
  },
  number: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: '#fff',
    fontSize: 11
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 10
  },
  image: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 90,
    height: 90
  }
})