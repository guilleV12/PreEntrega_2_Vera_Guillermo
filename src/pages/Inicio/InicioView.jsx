import React from 'react'
import backgroundImg from '../../assets/img/bg.jpg'
import Lista from '../../components/Lista/Lista'

const InicioView = ({ listaJuegos }) => {
  return (
    <div className='pagina-inicio'>
      <img src={backgroundImg} className='inicio-img-bg'/>
      <main className='inicio-container'>
        <h1 className='inicio-title'>Coleccion de juegos</h1>
        <Lista items={listaJuegos} tipo={'catalogo'} clase={'lista-catalogo'}/>
      </main>
    </div>
  )
}

export default InicioView