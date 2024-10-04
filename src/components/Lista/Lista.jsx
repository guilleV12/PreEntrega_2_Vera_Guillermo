import React from 'react'
import './lista.css'
import ItemListContainer from './ItemListContainer/ItemListContainer'

const Lista = ({ items, clase, tipo }) => {

  return (
    <ul className={clase}>
      {
        items.map((item, index) => (
          <ItemListContainer tipo={tipo} item={item} key={index} tag={'h2'} clase={'botones-nav'}/>
        ))
      }
    </ul>
  )
}

export default Lista