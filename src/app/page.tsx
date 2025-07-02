'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import HeroSection from './_components/HeroSection'
import Projects from './_components/Projects'
import TechnologiesSection from './_components/MyTechnologies'
import About from './_components/About'
import Contacts from './_components/Contacts'

function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <HeroSection />
      <div className="max-w-7xl">
        <About />
        <Projects />
        <TechnologiesSection />
        <Contacts />
      </div>

      {/* Botão flutuante para voltar ao topo */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-[#F66135] hover:bg-[#F66135]/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 group cursor-pointer"
            aria-label="Voltar ao topo"
          >
            <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-200" />

            {/* Efeito de pulso */}
            <div className="absolute inset-0 bg-[#F66135] rounded-full animate-ping opacity-20 " />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  )
}

export default Home
