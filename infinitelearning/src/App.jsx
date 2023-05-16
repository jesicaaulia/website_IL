import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Home from './components/Home'
import Teams from './components/Teams'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <div> 
      <Sidenav />
      <Home />
      <Teams />
      <Projects />
      <Contact />
    </div>
    )
}

export default App
