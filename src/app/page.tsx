import React from 'react'
import HeroSection from './_components/HeroSection'
import Projects from './_components/Projects'
import TechnologiesSection from './_components/MyTechnologies'
import About from './_components/About'

function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <HeroSection />
      <About />
      <Projects />
      <TechnologiesSection />
    </main>
  )
}

export default Home
