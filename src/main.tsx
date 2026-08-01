import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'

window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault()
  window.location.reload()
})

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('No se encontró el elemento raíz de la aplicación.')
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)