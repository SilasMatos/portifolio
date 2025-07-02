'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Particles from '../../components/Particles/Particles'
import hero_image from '@/assets/hero-image.png'
import Image from 'next/image'
import RotatingText from '../../components/RotatingText/RotatingText'

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  const imageVariants = {
    hidden: { x: 100, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen  flex items-center justify-center"
      ref={containerRef}
    >
      <div className="absolute inset-0 -z-10">
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleColors={['#ffffff', '#cf4d1a', '#ff8b3e']}
          moveParticlesOnHover={true}
          particleHoverFactor={1.5}
          alphaParticles={true}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={false}
        />
      </div>

      {/* Background Gradients */}
      {/* <div className="absolute top-0 left-0 w-96 h-96 bg-[#F66135]/10 rounded-full blur-3xl -z-20" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#F66135]/5 rounded-full blur-3xl -z-20" /> */}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-[#F66135]/10 text-[#F66135] text-sm font-medium"
              whileHover={{ scale: 1.05 }}
            >
              👋 Bem-vindo ao meu portfólio
            </motion.span>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#ededed] leading-tight">
                Desenvolvedor{' '}
                <span className="text-[#F66135]">
                  <RotatingText
                    texts={['Full Stack', 'Frontend', 'Backend']}
                    rotationInterval={3000}
                    className="inline-block"
                  />
                </span>
              </h1>

              <motion.div
                className="w-24 h-1 bg-[#F66135] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </div>

            <motion.p
              className="text-lg md:text-xl text-[#ededed]/80 leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              Apaixonado por{' '}
              <span className="text-[#F66135] font-semibold">tecnologia</span> e
              por criar soluções que fazem a diferença. Cada projeto é uma nova{' '}
              <span className="text-[#F66135] font-semibold">aventura</span>{' '}
              onde busco{' '}
              <span className="text-[#F66135] font-semibold">inovação</span> e{' '}
              <span className="text-[#F66135] font-semibold">qualidade</span>.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#F66135] text-white font-semibold rounded-lg hover:bg-[#F66135]/90 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Projetos
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </motion.a>

              <motion.a
                href="/Curriculo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#F66135] text-[#F66135] font-semibold rounded-lg hover:bg-[#F66135] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-[#F66135]">
                  2+
                </h3>
                <p className="text-[#ededed]/70 text-sm">Anos de Experiência</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-[#F66135]">
                  15+
                </h3>
                <p className="text-[#ededed]/70 text-sm">Projetos Concluídos</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-[#F66135]">
                  10+
                </h3>
                <p className="text-[#ededed]/70 text-sm">Tecnologias</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={hero_image}
                  alt="Silas Matos - Desenvolvedor Full Stack"
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-[#F66135]/20 backdrop-blur-sm"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />

              <motion.div
                className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-[#F66135]/30 backdrop-blur-sm"
                animate={{
                  y: [0, 10, 0],
                  x: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />

              <motion.div
                className="absolute top-1/2 -right-8 w-12 h-12 rounded-full bg-[#F66135]/25 backdrop-blur-sm"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />

              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F66135]/10 to-transparent rounded-2xl transform rotate-6 scale-105 -z-10" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            className="flex flex-col items-center space-y-2 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() =>
              document.getElementById('about')?.scrollIntoView({
                behavior: 'smooth'
              })
            }
          >
            <span className="text-[#ededed]/60 text-sm">Role para baixo</span>
            <div className="w-6 h-10 border-2 border-[#F66135]/50 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-[#F66135] rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
