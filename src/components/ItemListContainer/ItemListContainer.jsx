import React from 'react'
import ItemList from './ItemList'
import hocFilterJuegos from '../hoc/hocFilterJuegos'
import './itemlistcontainer.css'

const ItemListContainer = ({ juegos }) => {
  return (
    <div className="item-list-container">
      <ItemList juegos={juegos}/>
    </div>
  )
}

const ItemListContainerWithHoc = hocFilterJuegos(ItemListContainer)

export default ItemListContainerWithHoc