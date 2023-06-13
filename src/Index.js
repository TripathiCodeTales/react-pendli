import React from 'react';
import App from './App';
import Dashboard from './Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function Index() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/Dashboard',
      element: <Dashboard />,
    },
  ]);
  return <RouterProvider router={router} />;
}
export default Index;
