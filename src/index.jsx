import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AuthorPage } from './pages/AuthorPage';
import { ProjectPage } from './pages/ProjectPage';
import './global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/author',
    element: <AuthorPage />,
  },
  {
    path: '/project',
    element: <ProjectPage />,
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
