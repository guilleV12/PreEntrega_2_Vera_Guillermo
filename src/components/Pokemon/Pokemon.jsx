import React, { useEffect } from 'react'
import './pokemon.css'
import PokemonList from './PokemonList/PokemonList'

const Pokemon = ({ pokemons, setPokemons, consultaPokemon }) => {
  
  useEffect(() => {
    consultaPokemon
      .then(pokemonsData => {
        setPokemons(pokemonsData)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        console.log('Proceso finalizado')
      })
  }, [])

  //console.log(pokemons)

  return (
    <main className="pokemon-container">
      <h1 className='pokemons-title'>Pokemons</h1>
      <PokemonList pokemons={pokemons} />
    </main>
  )
}

export default Pokemon