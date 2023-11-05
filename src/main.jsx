import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRouter from './router/MainRouter'
import AuthProvider from './providers/AuthProvider'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MainRouter}></RouterProvider>
    </AuthProvider>
    <Toaster />
  </React.StrictMode>,
)
