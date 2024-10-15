import React from 'react'
import PokemonItem from './PokemonItem'

const PokemonList = ({ pokemons }) => {
  return (
    <div className='pokemon-list'>
      {
        pokemons.map((pokemon, indice) => 
          <PokemonItem pokemon={pokemon} key={indice} pokemons={pokemons}/>
        )
      }
    </div>
  )
}

export default PokemonList