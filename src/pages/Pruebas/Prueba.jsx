import React, { useEffect, useState } from 'react'
import './prueba.css'
import Pokemon from '../../components/Pokemon/Pokemon'

const Prueba = ({  }) => {
  const [pokemons, setPokemons] = useState([])
  
  const consultaPokemon = new Promise( async(resolve, reject) => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
    const data = await response.json()
    const arrayPokemons = await data.results
    resolve(arrayPokemons)
  })

  return (
    <>
      <Pokemon pokemons={pokemons} setPokemons={setPokemons} consultaPokemon={consultaPokemon}/>
    </>
  )
}

export default Prueba