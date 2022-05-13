import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { capitalize } from 'lodash'
import { useNavigation } from '@react-navigation/native'
import getColorByPokemonType from '../utils/getColorByPokemonType'


const PokemonCard = ({ pokemon }) => {
  // console.log('pokemon', pokemon)
  const navigation = useNavigation()
  const pokemonColor = getColorByPokemonType(pokemon.type)
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles }

  const goTOPokemon = () => {
    // console.log(`poemon ${pokemon.name}`)
    navigation.navigate('Pokemon', { id: pokemon.id })
  }

  return (
    <TouchableWithoutFeedback onPress={goTOPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles} >
            <Text style={styles.number} >#{`${pokemon.order}`.padStart(3, 0)}</Text>
            <Text style={styles.name} >{capitalize(pokemon.name)}</Text>
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
    flex: 1,
    borderRadius: 15,
    padding: 10
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