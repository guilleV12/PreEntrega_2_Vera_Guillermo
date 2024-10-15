import React, { useEffect, useState } from 'react'
import PokemonItemViwe from './PokemonItemViwe'

const PokemonItem = ({ pokemon }) => {
  const [pokemonObj, setPokemonObj] = useState(false)

  const consultaImage = new Promise( async(resolve, reject) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
    const data = await response.json()
    resolve(data)
  })

  return (
    <PokemonItemViwe pokemonObj={pokemonObj} callback={consultaImage} setPokemonObj={setPokemonObj}/>
  )
}

export default PokemonItem