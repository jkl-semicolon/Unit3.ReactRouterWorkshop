import { useState } from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Header from './components/Header.jsx'
import Color from './components/Color.jsx'
import Home from './components/Home.jsx'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:color' element={<Color/>}/>
      </Routes>
    </>
  )
}

export default App
