import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const ItemListContainerWithHoc = ({ titulo, items, cargando }) => {
  return (
    <ItemListContainer titulo={titulo} items={items} cargando={cargando}/>
  )
}

export default ItemListContainerWithHoc