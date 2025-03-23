import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Landingpage from './components/Landingpage.jsx'
import Navbar from './components/navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Landingpage/>
    <Navbar/>
  </StrictMode>,
)
