import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Greeting from './components/Greeting'

function App() {
  
  return (
    <>
    <Greeting name="Muhsin" surname="Hassan" />
     <Header />
    </>
  )
}

export default App
