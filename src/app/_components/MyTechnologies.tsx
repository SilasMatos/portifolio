'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { technologies } from '@/constants/technologies-data'

function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState('Todas')
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const categories = [
    'Todas',
    ...new Set(technologies.map(tech => tech.category))
  ]

  const filteredTechnologies =
    activeCategory === 'Todas'
      ? technologies
      : technologies.filter(tech => tech.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 }
    }
  }

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: '10%',
      transition: { duration: 1.2, ease: 'easeInOut' }
    }
  }

  return (
    <section
      id="technologies"
      className="py-24 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Partículas de fundo */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#F66135]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1 rounded-full bg-[#F66135]/10 text-[#F66135] text-sm mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Habilidades
          </motion.span>
          <h2 className="text-4xl font-bold text-[#ededed] mb-6">
            Tecnologias
          </h2>

          <motion.div
            className="w-10 h-1 bg-[#F66135] mx-auto rounded-full mb-8"
            initial="hidden"
            animate="visible"
            variants={lineVariants}
          />

          <p className="max-w-2xl mx-auto text-[#ededed]/80">
            Estas são as tecnologias que domino e utilizo no meu dia a dia para
            criar soluções modernas, eficientes e com foco em excelência
            técnica.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#F66135] text-[#ededed]'
                  : 'bg-[#171717] text-[#ededed]/80 hover:bg-[#F66135]/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de tecnologias */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8"
        >
          {filteredTechnologies.map(tech => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredTech(tech.name)}
              onHoverEnd={() => setHoveredTech(null)}
              className="relative group"
            >
              <div
                className={`
                rounded-xl p-6 h-full flex flex-col items-center justify-center 
                bg-[#171717] border border-transparent transition-all duration-300
                ${
                  hoveredTech === tech.name
                    ? 'border-[#F66135]/50 shadow-lg shadow-[#F66135]/10'
                    : ''
                }
              `}
              >
                <motion.div
                  className="w-18 h-18 mb-4 relative flex items-center justify-center"
                  whileHover={{ rotate: 5 }}
                  animate={
                    hoveredTech === tech.name ? { scale: [1, 1.1, 1.05] } : {}
                  }
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="object-cover w-16 h-16 rounded-full"
                  />

                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#F66135]/30"
                    animate={
                      hoveredTech === tech.name
                        ? {
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3]
                          }
                        : {}
                    }
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>

                <h3 className="text-lg font-semibold text-[#ededed] mb-1">
                  {tech.name}
                </h3>

                <motion.div
                  className="w-12 h-0.5 bg-[#F66135]/30 my-2"
                  initial={{ width: 0 }}
                  animate={
                    hoveredTech === tech.name ? { width: 48 } : { width: 20 }
                  }
                  transition={{ duration: 0.3 }}
                />

                <motion.span
                  className="text-xs text-[#ededed]/70 px-2 py-1 rounded-full border border-[#F66135]/20 mt-1"
                  initial={{ opacity: 0 }}
                  animate={
                    hoveredTech === tech.name
                      ? { opacity: 1 }
                      : { opacity: 0.7 }
                  }
                >
                  {tech.level}
                </motion.span>

                <motion.p
                  className="absolute top-full left-0 right-0 mt-1 px-3 py-2 bg-[#171717] rounded-lg text-xs text-[#ededed]/80 z-10"
                  initial={{ opacity: 0, y: -10, maxHeight: 0 }}
                  animate={
                    hoveredTech === tech.name
                      ? { opacity: 1, y: 0, maxHeight: 100, display: 'block' }
                      : {
                          opacity: 0,
                          y: -10,
                          maxHeight: 0,
                          transitionEnd: { display: 'none' }
                        }
                  }
                  transition={{ duration: 0.2 }}
                >
                  {tech.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div className="flex items-center justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-4 h-4 rounded-full bg-[#F66135]"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  repeatDelay: 1
                }}
              />
            ))}
          </motion.div>
          <p className="mt-4 text-[#ededed]/60 text-sm">
            Sempre em constante evolução
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologiesSection
