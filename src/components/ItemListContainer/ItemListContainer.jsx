import React from 'react'
import ItemList from './ItemList/ItemList'
import './itemlistcontainer.css'
import { MetroSpinner } from 'react-spinners-kit'

const ItemListContainer = ({ items, titulo, cargando }) => {
  let spanTitulo = React.createElement('span', {className: 'inicio-title-span'}, 'Resultados de: ')
  let tituloElemento = React.createElement('h1', {className: 'inicio-title'}, titulo ? titulo : `Ofertas semanales!`)

  return (
    <main className='inicio-container'>
      {
        cargando ? (
          <div className="loading-screen">
            <MetroSpinner size={100}/>
          </div>
        ) : (
          <>
            <div className="titulo-container">
              {titulo && spanTitulo}{tituloElemento}
            </div>
            <ul className='lista-catalogo'>
              <ItemList items={items} cargando={cargando}/>
            </ul>
          </>
        )
      }
    </main>
  )
}

export default ItemListContainer