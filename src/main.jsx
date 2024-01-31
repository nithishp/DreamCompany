import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterScreen from './pages/RegisterScreen.jsx'
import LoginScreen from './pages/LoginScreen.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/register' element={<RegisterScreen/>}/>
      <Route path='/login' element={<LoginScreen/>}/>
    </Routes>
  </BrowserRouter>
    
  
)
