import React from 'react'
import './itemdetail.css'

const ItemDetailContainer = ({ manejarClick }) => {
  return (
    <div className="item-detail-container">
      <button className="close-detail-container" onClick={()=>{manejarClick()}}>x</button>

    </div>
  )
}

export default ItemDetailContainer