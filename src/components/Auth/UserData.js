import { useCallback, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { size } from 'lodash'
import useAuth from '../../hooks/useAuth'
import { useFocusEffect } from '@react-navigation/native'
import { getPokemonsFavoritesApi } from '../../api/favorite'

const UserData = () => {

  const { auth, logout } = useAuth()
  const [total, setTotal] = useState(10)

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const res = await getPokemonsFavoritesApi()
          setTotal(size(res))
        } catch (error) {
          setTotal(0)
        }
      })()
    }, [])
  )

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>bienvenide</Text>
        <Text style={styles.title}>{`${auth.firstname} ${auth.lastname}`}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={`${auth.firstname} ${auth.lastname}`} />
        <ItemMenu title="Username" text={`${auth.username}`} />
        <ItemMenu title="Email" text={`${auth.email}`} />
        <ItemMenu title="Total Favoritos" text={`${total} pokemons`} />
      </View>
      <Button title='Desconectarse' onPress={logout} />
    </View>
  )
}

export default UserData

const ItemMenu = (props) => {
  const { title, text } = props
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle} >{title}:</Text>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20
  },
  titleBlock: {
    marginBottom: 30
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22
  },
  dataContent: {
    marginBottom: 20
  },
  itemMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#cfcfcf'
  },
  itemMenuTitle: {
    fontWeight: 'bold',
    paddingRight: 10,
    width: 120
  }
})