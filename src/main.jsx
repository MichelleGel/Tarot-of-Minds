import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import RouterTarot from './router/Router'
import './index.css'
import { TarotProvider } from './components/TarotContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TarotProvider>
    <RouterProvider router={RouterTarot} />
    </TarotProvider>
  </StrictMode>,
)
