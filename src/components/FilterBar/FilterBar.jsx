import React from 'react'
import './filterbar.css'

const FilterBar = ({ setFiltro }) => {

  return (
    <div className='filter-bar'>
      <input type="text" className='input-filter' onChange={(event) => {setFiltro(event.target.value)}}/>
    </div>
  )
}

export default FilterBar