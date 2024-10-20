import { useEffect, useState } from 'react'
import { getJuegos } from '../../data/data'
import { useParams } from 'react-router-dom'

const useJuegos = () => {
  const [juegos, setJuegos] = useState([])
  const [cargando, setCargando] = useState(true)
  const {categoriaId} = useParams()
  const {juegoId} = useParams()

  useEffect(() => {
    setCargando(true)

    getJuegos()
    .then((data) => {
      if (categoriaId) {
        setJuegos(data.filter((juego) => parseInt(juego.categoria) === parseInt(categoriaId)))
      } else if (juegoId) {
        setJuegos(data.find((juego) => parseInt(juego.id) === parseInt(juegoId)))
      } else {
        setJuegos(data)
      }
    })
    .catch((error) => {console.log('Error: ' + error)})
    .finally(() => {setCargando(false)})
  },[categoriaId])

  return (
    {juegos, cargando}
  )
}

export default useJuegos