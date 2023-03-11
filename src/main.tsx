import React, { Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import Home from './pages/Home';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './providers/ThemeProvider';

// import i18n (needs to be bundled ;))
import './i18n';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <Suspense fallback={<p>Cargando....</p>}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);
