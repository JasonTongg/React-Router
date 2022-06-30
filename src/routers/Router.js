import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Detail from '../pages/Detail'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/detail/:id" element={<Detail/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
