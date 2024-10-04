import React from 'react'
import './cartwidget.css'
import carrito from '../../assets/img/cart.png'

const CartWidget = ({  }) => {
  return (
    <div className='carrito-container'>
      <img src={carrito} alt="" />
      <span className='contador-prods'>4</span>
    </div>
  )
}

export default CartWidget