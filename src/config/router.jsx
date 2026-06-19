import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import HomePage from '../pages/Home/Home';
import ListPage from '../pages/List/List';

export const router = createBrowserRouter([
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
