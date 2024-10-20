import RDR2 from '../assets/img/rdr2.jpg'
import GOWV from '../assets/img/gowv.webp'
import CODBO2 from '../assets/img/cofbo2.jpg'
import FIFA from '../assets/img/fifa24.avif'
import HBLD from '../assets/img/hellblade.jpg'
import GTAV from '../assets/img/gtav.webp'
import RDR2B from '../assets/img/rdr2B.jpg'
import GOWVB from '../assets/img/gowvB.jpeg'
import CODBO2B from '../assets/img/cofbo2B.jpg'
import FIFAB from '../assets/img/fifa24B.png'
import HBLDB from '../assets/img/hellbladeB.webp'
import GTAVB from '../assets/img/gtavB.jpg'

const catalogoJuegos = [
  {id: 1, banner: RDR2B, nombre: 'Red Dead Redemption 2', precio: 10000, src: RDR2, categoria: 2, stock: 0, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius urna nec blandit tincidunt. In maximus vel risus sit amet.'},
  {id: 2, banner: GOWVB, nombre: 'God of War: Vallhala', precio: 10000, src: GOWV, categoria: 3, stock: 5, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius urna nec blandit tincidunt. In maximus vel risus sit amet.'},
  {id: 3, banner: CODBO2B, nombre: 'Call of Duty: Black Ops 2', precio: 10000, src: CODBO2, categoria: 3, stock: 11, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius urna nec blandit tincidunt. In maximus vel risus sit amet.'},
  {id: 4, banner: FIFAB, nombre: 'Fifa 24', precio: 10000, src: FIFA, categoria: 1, stock: 5, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius urna nec blandit tincidunt. In maximus vel risus sit amet.'},
  {id: 5, banner: HBLDB, nombre: 'Hellblade', precio: 10000, src: HBLD, categoria: 2, stock: 11, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius urna nec blandit tincidunt. In maximus vel risus sit amet.'},
  {id: 6, banner: GTAVB, nombre: 'Grand Theft Auto V', precio: 10000, src: GTAV, categoria: 3, stock: 9, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius urna nec blandit tincidunt. In maximus vel risus sit amet.'}
]

const categorias = [
  {id: 1, categoria: 'Deportes'},
  {id: 2, categoria: 'Aventura'},
  {id: 3, categoria: 'Accion'}
]

const getJuegos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(catalogoJuegos)
    }, 2000);
  })
}

const getCategorias = () => {
  return new Promise((resolve,reject) => {
    resolve(categorias)
  })
}

export {getJuegos, getCategorias}