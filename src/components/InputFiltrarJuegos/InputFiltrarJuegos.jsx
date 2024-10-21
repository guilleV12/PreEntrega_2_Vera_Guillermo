import React from 'react'

const InputFiltrarJuegos = ({ setFiltro, setOrdenPrecio }) => {
  return (
    <div className="buscador-container">
      <h4 className='buscador-title'>Buscar juegos</h4>
      <input type="text" placeholder='Buscar...' className='buscador-juegos' maxLength="10" onChange={(event) => {setFiltro(event.target.value.toLowerCase())}}/>
      <h4 className='buscador-title'>Ordenar por precio</h4>
      <div className="ordenar-container">
        <button className="ordenar-precio" onClick={() => {setOrdenPrecio('mayor')}}>Mayor</button>
        <button className='ordenar-precio' onClick={() => {setOrdenPrecio('menor')}}>Menor</button>
      </div>
    </div>
  )
}

export default InputFiltrarJuegos