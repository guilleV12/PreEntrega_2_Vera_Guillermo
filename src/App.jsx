import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainerWithHoc from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainerWithHoc />} />
          <Route exact path='/Categoria/:categoriaId' element={<ItemListContainerWithHoc />} />
          <Route exact path='/Juego/:juegoId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
