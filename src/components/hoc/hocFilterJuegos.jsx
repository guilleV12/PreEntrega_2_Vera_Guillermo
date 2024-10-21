import React, { useState } from 'react'
import useJuegos from '../hooks/useJuegos'
import './hoc.css'
import LoadingSpinnerComponent from 'react-spinners-components';
import TituloItemListContainer from '../TituloItemListContainer/TituloItemListContainer';
import InputFiltrarJuegos from '../InputFiltrarJuegos/InputFiltrarJuegos';

const hocFilterJuegos = (Componente) => {
  return function () {
    const {juegos, cargando} = useJuegos()
    const [filtro, setFiltro] = useState("")
    const [ordenPrecio, setOrdenPrecio] = useState("")

    const filtrar = () => {
      let juegosFiltrados = juegos.filter((juego) => juego.nombre.toLowerCase().includes(filtro))

      if (ordenPrecio === "mayor") {
        juegosFiltrados.sort((juegoPrev, juegoSig) => juegoSig.precio - juegoPrev.precio)
      } else if (ordenPrecio === "menor") {
        juegosFiltrados.sort((juegoPrev, juegoSig) => juegoPrev.precio - juegoSig.precio)
      }

      return juegosFiltrados
    }

  return (
    <main className="main-container">
      <div className='titulo-container'>
        <TituloItemListContainer filtro={filtro} ordenPrecio={ordenPrecio} cargando={cargando}/>
      </div>
      {cargando ? (
          <div className='spinner'>
            <LoadingSpinnerComponent type='Eater' color={ 'blueviolet' } size={ '300px' }/>
          </div>
        ):(
          <>
            <InputFiltrarJuegos setFiltro={setFiltro} setOrdenPrecio={setOrdenPrecio}/>
            <Componente juegos={filtrar()}/>
          </>
        )
      }
    </main>
  )
  }
}

export default hocFilterJuegos