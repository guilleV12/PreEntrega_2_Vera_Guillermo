import React from 'react'
import './inicio.css'
import ItemListContainerWithHoc from '../../components/ItemListContainerWithHoc/ItemListContainerWithHoc'

const InicioView = ({ listaJuegos, cargando, titulo }) => {
  
  return (
    <div className='pagina-inicio'>
      <ItemListContainerWithHoc items={listaJuegos} cargando={cargando} titulo={titulo}/>
    </div>
  )
}

export default InicioView