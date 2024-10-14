import React, { useState } from 'react'
import InicioView from './InicioView'
import { catalogoJuegos } from '../../data/data'

const InicioControlador = ({  }) => {
  const [listaJuegos, setListaJuegos] = useState([])

  const getJuegos = new Promise((resolve, reject) => {
    resolve(catalogoJuegos)
  })

  setTimeout(()=>{
    getJuegos
    .then(response => {
      setListaJuegos(response)
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      console.log('Proceso finalizado')
    })
  }, 2000)

  return (
    <InicioView listaJuegos={listaJuegos}/>
  )
}

export default InicioControlador