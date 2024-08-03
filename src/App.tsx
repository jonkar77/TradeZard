import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppLayout } from './AppLayout'
import AppRoutes from './config/AppRoutes'

function App() {

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
