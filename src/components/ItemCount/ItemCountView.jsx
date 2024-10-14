import React from 'react'
import './itemcount.css'

const ItemCountView = ({ noStock, cantidad, callBackSumar, callBackRestar }) => {
  return (
    <>
      <div className="cantidad-comprar">
        <button className={noStock ? "manejar-nostock" : "manejar-cantidad"} id='restar-cantidad' onClick={() => {callBackRestar()}}>-</button>
        <span className="cantidad-seleccionada-comprar">{cantidad}</span>
        <button className={noStock ? "manejar-nostock" : "manejar-cantidad"} id='sumar-cantidad' onClick={() => {callBackSumar()}}>+</button>
      </div>
      <button className={noStock ? "btn-nostock" : "btn-catalogo-comprar"}>{noStock ? 'Sin stock' : 'Comprar'}</button>
    </>
  )
}

export default ItemCountView