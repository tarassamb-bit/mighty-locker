import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Nav />
      <main className="max-w-4xl mx-auto p-6">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="text-center p-6 text-sm">Made with ♥ by tarassamb-bit</footer>
    </div>
  )
}
