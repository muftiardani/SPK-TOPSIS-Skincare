// src/AppRouter.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Input from './pages/Input'
import Result from './pages/Result'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/input" element={<Input />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  )
}
