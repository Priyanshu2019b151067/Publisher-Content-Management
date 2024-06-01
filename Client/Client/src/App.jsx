import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import HomePage from './scenes/Home/HomePage';
import Signup from './components/Signup';
import Publisher from './components/Publisher';
import CartPage from './scenes/Cart/CartPage';


function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Publisher/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/home' element = {<HomePage/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/cart' element={<CartPage/>}/>
  </Routes>
  </BrowserRouter>
}

export default App
