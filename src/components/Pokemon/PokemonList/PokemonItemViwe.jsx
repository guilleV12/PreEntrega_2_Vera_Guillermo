import React, { useEffect } from 'react'

const PokemonItemViwe = ({ pokemonObj, callback, setPokemonObj }) => {
  
    useEffect(() => {
      callback
        .then(pokemonData => {
          setPokemonObj(pokemonData)
          console.log(pokemonData)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          console.log('Proceso finalizado')
        })
    }, [])

  return (
    <div className='pokemon-item'>
      <img src={pokemonObj ? pokemonObj.sprites.front_default : ''} alt="" className="pokemon-item-img" />
      <h3 className='pokemon-name'>Nombre: {pokemonObj ? pokemonObj.name : ''}</h3>
      <h5 className='pokemon-stats'>Altura: {pokemonObj ? pokemonObj.height * 2.54 : ''} cm</h5>
      <h5 className='pokemon-stats'>Peso: {pokemonObj ? pokemonObj.weight * 0.45 : ''} kg</h5>
      <h5 className='pokemon-stats'>Tipo: {pokemonObj? pokemonObj.types[0].type.name : ''}</h5>
    </div>
  )
}

export default PokemonItemViwe