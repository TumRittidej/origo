import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@/css/home.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 800,
  once: true,
  easing: 'ease-out-cubic'
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
