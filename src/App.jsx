import { useState } from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Header from './components/Header.jsx'
import Color from './components/Color.jsx'
import Home from './components/Home.jsx'

function App() {
  return (
    <>
      <div>
        <Header/>
      </div>
      <div id='colorContainer'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:color' element={<Color/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
