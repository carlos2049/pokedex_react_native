import { API_HOST } from '../utils/constants'

export const getPokemonsApi = () => {
  // try {
  const url = `${API_HOST}/pokemon?limit=20&offset=0`
  //   const response = await fetch(url)
  //   const result = await response.json();
  //   return result

  // } catch (error) {
  //   throw error
  // }

  // con promise
  return fetch(url)
    .then((response) => {
      return response.json()
    })
    .then(data => { return data })
    .catch(error => console.log(error))
}

export const getPokemonDatailsByUrlApi = async (url) => {
  try {
    const response = await fetch(url)
    const result = await response.json()
    return result
  } catch (error) {
    throw error
  }
}