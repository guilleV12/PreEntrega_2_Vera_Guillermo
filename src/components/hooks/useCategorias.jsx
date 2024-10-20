import { useEffect, useState } from 'react'
import { getCategorias } from '../../data/data'

const useCategorias = () => {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    getCategorias()
    .then((data) => { setCategorias(data) })
    .catch((error) => {console.log('Error: ' + error)})
  },[])

  return (
    {categorias}
  )
}

export default useCategorias