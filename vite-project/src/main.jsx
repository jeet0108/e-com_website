import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './Pages/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)
