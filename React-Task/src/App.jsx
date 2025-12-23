import React from 'react'
import Navbar from './Components/Navbar'
import Page from './Components/Page'
import Part from './Components/part'
import Board from './Components/Board'
import About from './Components/About'
import Advantages from './Components/Advantages'
import Others from './Components/Others'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Page/>
      <Part/>
      <Board/>
      <About/>
      <Advantages/>
      <Others/>
    </div>
  )
}

export default App