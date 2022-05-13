import { API_HOST } from '../utils/constants'

export const getPokemonsApi = (endpointUrl) => {
  // try {
  const url = `${API_HOST}/pokemon?limit=20&offset=0`
  //   const response = await fetch(url)
  //   const result = await response.json();
  //   return result

  // } catch (error) {
  //   throw error
  // }

  // con promise
  return fetch(endpointUrl || url)
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

export const getPokemonDetailsApi = async (id) => {
  try {
    const url = `${API_HOST}/pokemon/${id}`
    const response = await fetch(url)
    const result = response.json()
    return result
  } catch (error) {
    throw error
  }
}