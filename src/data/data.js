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
import DBZBT3 from '../assets/img/dbzbt3.jpg'
import DBZBT3B from '../assets/img/dbzbt3B.jpg'
import NBA from '../assets/img/nba2k.jpg'
import NBAB from '../assets/img/nba2kB.jpg'
import MDN from '../assets/img/madden.avif'
import MDNB from '../assets/img/maddenb.jpg'

const catalogoJuegos = [
  {id: 1, banner: RDR2B, nombre: 'Red Dead Redemption 2', precio: 12000, src: RDR2, categoria: 2, stock: 0, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius urna nec blandit tincidunt. In maximus vel risus sit amet.'},
  {id: 2, banner: GOWVB, nombre: 'God of War: Vallhala', precio: 15000, src: GOWV, categoria: 2, stock: 5, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius urna nec blandit tincidunt. In maximus vel risus sit amet.'},
  {id: 3, banner: CODBO2B, nombre: 'Call of Duty: Black Ops 2', precio: 12000, src: CODBO2, categoria: 3, stock: 11, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius urna nec blandit tincidunt. In maximus vel risus sit amet.'},
  {id: 4, banner: FIFAB, nombre: 'Fifa 24', precio: 14000, src: FIFA, categoria: 1, stock: 5, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius urna nec blandit tincidunt. In maximus vel risus sit amet.'},
  {id: 5, banner: HBLDB, nombre: 'Hellblade', precio: 15000, src: HBLD, categoria: 2, stock: 11, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius urna nec blandit tincidunt. In maximus vel risus sit amet.'},
  {id: 6, banner: GTAVB, nombre: 'Grand Theft Auto V', precio: 15000, src: GTAV, categoria: 3, stock: 9, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius urna nec blandit tincidunt. In maximus vel risus sit amet.'},
  {id: 7, banner: DBZBT3B, nombre: 'Dragon Ball Z Budokai Tenkaichi 3', precio: 12000, src: DBZBT3, categoria: 3, stock: 9, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius urna nec blandit tincidunt. In maximus vel risus sit amet.'},
  {id: 8, banner: NBAB, nombre: 'NBA 2k24', precio: 14000, src: NBA, categoria: 1, stock: 5, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius urna nec blandit tincidunt. In maximus vel risus sit amet.'},
  {id: 9, banner: MDNB, nombre: 'Madden 2k24', precio: 14000, src: MDN, categoria: 1, stock: 5, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius urna nec blandit tincidunt. In maximus vel risus sit amet.'}
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