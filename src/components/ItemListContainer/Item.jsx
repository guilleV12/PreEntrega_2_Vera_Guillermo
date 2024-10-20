import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ juego, nombreCategoria }) => {

  return (
    <>
      <div className="item-container">
        <img src={juego.src} alt="" className='item-img'/>
        <h5 className='item-paragraphs'>{juego.nombre}</h5>
        <h5 className='item-paragraphs-2'>Categoria: {nombreCategoria}.</h5>
        <h5 className='item-paragraphs-2'>$ {juego.precio}</h5>
        <Link to={`/Juego/${juego.id}`}>
          <button className="ver-detalles" >Ver +</button>
        </Link>
      </div>
    </>
  )
}

export default Item