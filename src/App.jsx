import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/projects'
import Experience from './components/Experience'
import EngineeringPrinciples from './components/EngineeringPrinciples'
import Skills from './components/Skills'
import Articles from './components/Articles'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <EngineeringPrinciples />
      <Skills />
      <Articles />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
