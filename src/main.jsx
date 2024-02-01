import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterScreen from './pages/RegisterScreen.jsx'
import LoginScreen from './pages/LoginScreen.jsx'
import Profile from './pages/Profile.jsx'
import GetInfo from './pages/GetInfo.jsx'
import GetInfo2 from './pages/GetInfo2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/register' element={<RegisterScreen/>}/>
      <Route path='/login' element={<LoginScreen/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/info' element={<GetInfo/>}/>
      <Route path='/infoper' element={<GetInfo2/>}/>
    </Routes>
  </BrowserRouter>
    
  
)
