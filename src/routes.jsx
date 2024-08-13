import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx';
import Layout from './Layout/Layout.jsx';

const CustomRouter = () => {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    }
  ])
}

export default CustomRouter