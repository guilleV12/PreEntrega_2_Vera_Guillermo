import React, { useEffect, useState } from 'react'
import InicioView from './InicioView'
import { getJuegos } from '../../data/data'
import FilterBar from '../../components/FilterBar/FilterBar'

const InicioControlador = ({  }) => {
  const [listaJuegos, setListaJuegos] = useState([])
  const [cargando, setCargando] = useState(false)
  const [filtro, setFiltro] = useState('')

  useEffect(() => {
    setCargando(true)
    getJuegos(filtro)
    .then((respuesta) => {
      setListaJuegos(respuesta)
      setCargando(false)
    })
    .catch((error) => console.log(error))
    .finally(() => console.log('Proceso finalizado')) 
  }, [filtro])

  return (
    <>
      <FilterBar setFiltro={setFiltro}/>
      <InicioView titulo={filtro} listaJuegos={listaJuegos} cargando={cargando}/>
    </>
  )
}

export default InicioControlador