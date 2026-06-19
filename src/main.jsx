import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './layouts/MainLayout/MainLayout'
import HomePage from './pages/Home/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainLayout>
      <HomePage />
    </MainLayout>
  </StrictMode>,
)
