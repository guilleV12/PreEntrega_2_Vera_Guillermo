import React from 'react'
import './tituloItemListContainer.css'
import { useParams } from 'react-router-dom'
import useCategorias from '../hooks/useCategorias'

const TituloItemListContainer = ({ filtro, ordenPrecio, cargando }) => {
  const {categoriaId} = useParams()
  const {categorias} = useCategorias()

  return (
    <div className='titulo-item-list-container'>
      {categoriaId && `${categorias.find((cat) => parseInt(cat.id) === parseInt(categoriaId))?.categoria}`}
      {categoriaId && ((ordenPrecio || filtro) && ' > ')}
      {ordenPrecio && `Ordenados por <${ordenPrecio}> precio`}
      {ordenPrecio && (filtro && ' > ')}
      {filtro && `Resultados para "${filtro}"`}
      
    </div>
  )
}

export default TituloItemListContainer