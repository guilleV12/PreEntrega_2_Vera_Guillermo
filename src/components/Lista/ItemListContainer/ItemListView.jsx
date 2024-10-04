import React from 'react'
import './itemlistcontainer.css'

const ItemListView = ({ juego }) => {
  
  return (
    <>
      <img className='img-catalogo' src={juego.src} alt="" />
      <h4 className='img-catalogo-titulo'>{juego.nombre}</h4>
      <h5 className='img-catalogo-categoria'>{`Categorias: ${juego.categoria}.`}</h5>
      <h5 className='img-catalogo-precio'>{`Precio: $${juego.precio}`}</h5>
      <div className="btn-catalogo-comprar-container">
        <button className='btn-catalogo-comprar'>Comprar</button>
      </div>
    </>
  )
}

export default ItemListView