import React from 'react'
import AppRouter from './AppRouter'
import Navbar  from './components/navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  )
}