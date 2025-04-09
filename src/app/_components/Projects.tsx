'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { projectsData } from '@/constants/projects-data'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  link: string
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut'
      }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="bg-[#171717] rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 h-full flex flex-col"
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <motion.h3
          className="text-xl font-bold mb-2 text-[#ededed]"
          whileHover={{ color: '#F66135' }}
        >
          {project.title}
        </motion.h3>

        <p className="text-[#ededed]/80 mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 bg-[#0a0a0a] text-sm rounded-full text-[#ededed]/90"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <motion.a
          href={project.link}
          className="inline-block px-6 py-2 bg-[#F66135] text-[#ededed] font-medium rounded-lg text-center hover:bg-[#F66135]/90 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Ver projeto
        </motion.a>
      </div>
    </motion.div>
  )
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const filters = ['Todos', 'React', 'Next.js', 'Tailwind', 'GSAP']

  const filteredProjects =
    activeFilter === 'Todos'
      ? projectsData
      : projectsData.filter(project => project.tags.includes(activeFilter))

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section id="projects" className="py-20 ">
      <div className="container mx-auto px-4">
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
            Portfólio
          </motion.span>
          <h2 className="text-4xl font-bold text-[#ededed] mb-6">
            Meus Projetos
          </h2>
          <div className="w-24 h-1 bg-[#F66135] mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-[#ededed]/80">
            Explore uma seleção cuidadosa dos meus projetos pessoais que
            destacam minhas habilidades e paixão por criar experiências digitais
            excepcionais.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#F66135] text-[#ededed]'
                  : 'bg-[#171717] text-[#ededed]/80 hover:bg-[#F66135]/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        ></motion.div>
      </div>
    </section>
  )
}

export default Projects
