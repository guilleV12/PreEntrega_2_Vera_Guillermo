import React from 'react'
import backgroundImg from '../../assets/img/bg.jpg'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import './inicio.css'

const InicioView = ({ listaJuegos }) => {
  
  return (
    <div className='pagina-inicio'>

      <img src={backgroundImg} className='inicio-img-bg'/>

      <ItemListContainer titulo={'Coleccion de juegos'} items={listaJuegos}/>

    </div>
  )
}

export default InicioView