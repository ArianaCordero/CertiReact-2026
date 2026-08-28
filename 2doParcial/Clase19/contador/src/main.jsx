import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Ejemplollaves from '../Ejemplollaves.tsx'
import Contador from '../Contador.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ejemplollaves />
    <Contador />
  </StrictMode>,
)