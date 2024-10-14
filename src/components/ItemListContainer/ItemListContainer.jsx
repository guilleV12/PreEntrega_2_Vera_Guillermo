import React from 'react'
import ItemList from './ItemList/ItemList'
import './itemlistcontainer.css'

const ItemListContainer = ({ items, titulo }) => {

  return (
    <main className='inicio-container'>
      <h1 className='inicio-title'>{titulo}</h1>
      <ul className='lista-catalogo'>
        <ItemList items={items}/>
      </ul>
    </main>
  )
}

export default ItemListContainer