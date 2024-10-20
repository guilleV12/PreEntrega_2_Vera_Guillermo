import React from 'react'
import Item from './Item'
import useCategorias from '../hooks/useCategorias'

const ItemList = ({ juegos }) => {
  const {categorias} = useCategorias()

  return (
    <div className="item-list">
      {
        juegos.map((juego) => 
          <Item juego={juego} key={juego.id} 
            nombreCategoria={categorias.find((categoria) => categoria.id === juego.categoria)?.categoria}
          />
        )
      }
    </div>
  )
}

export default ItemList