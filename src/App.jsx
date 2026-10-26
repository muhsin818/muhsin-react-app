import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Greeting from './components/Greeting'
import Counter from './components/Counter'

function App() {
  
  return (
    <>
     <Header />
     <br></br>
    <Greeting name="Muhsin" surname="Hassan" />
     <Counter />
    </>
  )
}

export default App
