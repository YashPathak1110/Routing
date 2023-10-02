import React from 'react'
import AppRouter from './AppRouter'
import { BrowserRouter as Router , Routes, Route, Link  } from 'react-router-dom'

function App() {
  return (
   
    <div>
    <AppRouter/>
    <Link className="nav-link" to="/">Home</Link>
    <Link className="nav-link" to="/about">About</Link>
    <Link className="nav-link" to="/contact">Contact</Link>

    

    </div>
  )
}

export default App