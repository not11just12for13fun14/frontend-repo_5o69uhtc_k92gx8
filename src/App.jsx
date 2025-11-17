import React from 'react'
import Hero from './components/Hero'
import Thesis from './components/Thesis'
import Products from './components/Products'
import Launches from './components/Launches'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="inline-block h-2 w-2 rounded-full bg-gray-900" />
            SoHo Labs
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-gray-700 sm:flex">
            <a href="#thesis" className="hover:text-gray-900">Thesis</a>
            <a href="#products" className="hover:text-gray-900">Products</a>
            <a href="#launches" className="hover:text-gray-900">Launches</a>
          </nav>
          <a href="#contact" className="rounded-lg border border-gray-900 bg-gray-900 px-3 py-1.5 text-sm font-semibold text-white hover:opacity-90">Contact</a>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <Hero />

      {/* Thesis */}
      <Thesis />

      {/* Products */}
      <Products />

      {/* Launches */}
      <Launches />

      {/* Footer */}
      <footer id="contact" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} SoHo Labs. All rights reserved.</p>
            <div className="flex gap-4 text-sm">
              <a href="mailto:founders@soho.com" className="hover:underline">Email</a>
              <a href="#" className="hover:underline">X</a>
              <a href="#" className="hover:underline">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
