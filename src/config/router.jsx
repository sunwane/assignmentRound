import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import HomePage from '../pages/Home/Home';
import ListPage from '../pages/List/List';
import DetailPage from '../pages/Detail/Detail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout><HomePage /></MainLayout>,
  },
  {
    path: '/books',
    element: <MainLayout><ListPage genre="all" /></MainLayout>,
  },
    {
    path: '/books/:id',
    element: <MainLayout><DetailPage /></MainLayout>,
  },
  {
    path: '/:genre',
    element: <MainLayout><ListPage /></MainLayout>,
  },
]);
