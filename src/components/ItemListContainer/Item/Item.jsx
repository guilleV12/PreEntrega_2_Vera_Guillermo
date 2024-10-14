import React from 'react'
import '../itemlistcontainer.css'

const Item = ({ juego }) => {
  
  return (
    <div className="item-container">
      <img className='img-catalogo' src={juego.src} alt="" />
      <h4 className='img-catalogo-titulo'>{juego.nombre}</h4>
      <h5 className='img-catalogo-categoria'>{`Categorias: ${juego.categoria}.`}</h5>
      <h5 className='img-catalogo-precio'>{`Precio: $${juego.precio}`}</h5>
      <button className='btn-ver-mas'>
        <h4>Ver mas +</h4>
      </button>
    </div>
  )
}

export default Item