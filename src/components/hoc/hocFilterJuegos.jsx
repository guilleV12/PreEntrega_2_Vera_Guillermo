import React, { useState } from 'react'
import useJuegos from '../hooks/useJuegos'
import './hoc.css'
import LoadingSpinnerComponent from 'react-spinners-components';

const hocFilterJuegos = (Componente) => {
  return function () {
    const {juegos, cargando} = useJuegos()
    const [filtro, setFiltro] = useState("")

    const filtrar = () => {
      let juegosFiltrados = juegos.filter((juego) => juego.nombre.toLowerCase().includes(filtro))
      return juegosFiltrados
    }

  return (
    <main className="main-container">
      {cargando ? (
          <div className='spinner'>
            <LoadingSpinnerComponent type='Eater' color={ 'blueviolet' } size={ '300px' }/>
          </div>
        ):(
          <>
            <div className="buscador-container">
            <h4 className='buscador-title'>Buscar juegos</h4>
            <input type="text" placeholder='Buscar...' className='buscador-juegos' onChange={(event) => {setFiltro(event.target.value.toLowerCase())}}/>
            <h4 className='buscador-title'>Ordenar por precio</h4>
            <div className="ordenar-container">
              <button className="ordenar-precio">Mayor</button>
              <button className='ordenar-precio'>Menor</button>
            </div>
            </div>
            <Componente juegos={filtrar()}/>
          </>
        )
      }
    </main>
  )
  }
}

export default hocFilterJuegos