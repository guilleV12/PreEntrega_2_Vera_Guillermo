import React from 'react'
import './itemlistcontainer.css'
import ItemListView from './ItemListView'

const ItemListContainer = ({ item, tag, clase, tipo }) => {
  const elemento = React.createElement(tag, {className: clase}, item)

  return (
    <li className={(tipo == 'catalogo') ? 'item-container' : 'btnNav-container'}>
      {
        tipo == 'catalogo' ? (
          <ItemListView juego={item}/>
        )
        : (elemento)
      }
    </li>
  )
}

export default ItemListContainer