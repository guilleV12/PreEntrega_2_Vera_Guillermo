import React from 'react'
import X from '../../assets/img/x.png'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ juego, closeDetailContainer, categoria }) => {
  return (
    <>
          <button className="close-detail-container" onClick={()=>{closeDetailContainer()}}>
            <img src={X} className='img-close-detail' />
          </button>
          <img src={juego.banner} className='banner-detail-container' alt="" />
          <h1 className='detail-title'><span className='pre-detail-graph'>Nombre:</span> {juego.nombre}.</h1>
          <h1 className="detail-categoria"><span className='pre-detail-graph'>Categoria: </span>{categoria}.</h1>
          <h1 className="detail-descripcion"><span className='pre-detail-graph'>Descripcion: </span>{juego.descripcion}.</h1>
          <h1 className="detail-precio"><span className='pre-detail-graph'>Precio: </span>${juego.precio}.</h1>
          <ItemCount juego={juego}/>
    </>
  )
}

export default ItemDetail