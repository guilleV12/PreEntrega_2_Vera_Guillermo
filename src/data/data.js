import RDR2 from '../assets/img/rdr2.jpg'
import GOWV from '../assets/img/gowv.webp'
import CODBO2 from '../assets/img/cofbo2.jpg'
import FIFA from '../assets/img/fifa24.avif'
import HBLD from '../assets/img/hellblade.jpg'
import GTAV from '../assets/img/gtav.webp'

const catalogoJuegos = [
  {id: 1, nombre: 'Red Dead Redemption 2', precio: 10000, src: RDR2, categoria: 'Western, Accion y Aventura', stock: 0},
  {id: 2, nombre: 'God of War: Vallhala', precio: 10000, src: GOWV, categoria: 'Mitologia, Accion y Aventura', stock: 5},
  {id: 3, nombre: 'Call of Duty: Black Ops 2', precio: 10000, src: CODBO2, categoria: 'Accion y Guerra', stock: 11},
  {id: 4, nombre: 'Fifa 24', precio: 10000, src: FIFA, categoria: 'Futbol y Deportes', stock: 5},
  {id: 5, nombre: 'Hellblade', precio: 10000, src: HBLD, categoria: 'Suspenso, historia y psicologico', stock: 11},
  {id: 6, nombre: 'Grand Theft Auto V', precio: 10000, src: GTAV, categoria: 'Accion e historia', stock: 9}
]

export {catalogoJuegos}