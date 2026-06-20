import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './config/router'
import { BagProvider } from './hooks/useBag'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BagProvider>
      <RouterProvider router={router} />
    </BagProvider>
  </StrictMode>,
)
