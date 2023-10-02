import React from 'react'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import Home from './Componant/Home'
import About from './Componant/About'
import Contact from './Componant/Contact'
import App from './App'
function AppRouter() {
  return (
    <div>
        <App/>
        <BrowserRouter>
           
            <Routes>
                <Route path='/' element={ <Home/> }></Route>
                <Route path='/about' element={ <About/> }></Route>
                <Route path='/contact' element={ <Contact/> }></Route>
            </Routes>
            
        </BrowserRouter>

    </div>
  );
}

export default AppRouter;