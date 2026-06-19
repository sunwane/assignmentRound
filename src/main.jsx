import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import MainLayout from './layouts/MainLayout/MainLayout'
import HomePage from './pages/Home/Home'
import ListPage from './pages/List/List'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout><HomePage /></MainLayout>,
  },
  {
    path: '/shop',
    element: <MainLayout><ListPage genre="all" /></MainLayout>,
  },
  {
    path: '/shop/:genre',
    element: <MainLayout><ListPage /></MainLayout>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
