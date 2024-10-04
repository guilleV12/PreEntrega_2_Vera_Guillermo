import React from 'react'
import './inicio.css'
import InicioView from './InicioView'
import RDR2 from '../../assets/img/rdr2.jpg'
import GOWV from '../../assets/img/gowv.webp'
import CODBO2 from '../../assets/img/cofbo2.jpg'

const Inicio = ({  }) => {
  let listaJuegos = [
    {nombre: 'Red Dead Redemption 2', precio: 10000, src: RDR2, categoria: 'Western, Accion y Aventura'},
    {nombre: 'God of War: Vallhala', precio: 10000, src: GOWV, categoria: 'Mitologia, Accion y Aventura'},
    {nombre: 'Call of Duty: Black Ops 2', precio: 10000, src: CODBO2, categoria: 'Accion y Guerra'}]

  return (
    <InicioView listaJuegos={listaJuegos}/>
  )
}

export default Inicio