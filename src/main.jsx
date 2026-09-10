import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stairs from './Components/Common/Stairs.jsx'
import NavContaxt from './Components/NavContaxtSection/NavContaxt.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavContaxt>
        <Stairs>
          <App />
        </Stairs>
      </NavContaxt>
    </BrowserRouter>
  </StrictMode>,
)
