import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ items }) => {

  return (
      <>
        {
            items.map(item => <Item juego={item} key={item.id}/>)
        }
      </>
  )
}

export default ItemList