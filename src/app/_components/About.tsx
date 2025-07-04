'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
const experiences = [
  {
    id: 1,
    role: 'Desenvolvedor Frontend Senior',
    company: 'Tel centro de contatos ',
    period: 'Jan 2023 - Presente',
    description:
      'Desenvolvimento de aplicações web modernas utilizando React, Next.js e TypeScript. Implementação de UIs responsivas e acessíveis com foco em performance e experiência do usuário.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Nest.js',
      'Fastify',
      'PostgreSQL'
    ]
  },

  {
    id: 2,
    role: 'Desenvolvedor Frontend Pleno',
    company: 'Tel centro de contatos',
    period: '2023 - Presente',
    description:
      'Criação de interfaces interativas e responsivas com foco em usabilidade. Otimização de performance front-end e implementação de animações fluidas.',
    technologies: ['React', 'JavaScript', 'SCSS', 'Framer Motion']
  }
]

const education = [
  {
    id: 1,
    degree: 'Técnico em Desenvolvimento de Sistemas',
    institution: 'SENAI',
    period: '2022 - 2023',
    description:
      'Formação técnica em desenvolvimento de sistemas, com ênfase em programação e banco de dados. Aprendizado prático em projetos reais.'
  },
  {
    id: 2,
    degree: 'Bacharelado em análise e Desenvolvimento de Sistemas',
    institution: 'UNIFAN - Centro Universitário Nobre',
    period: '2023 - atualmente',
    description:
      'Graduação em andamento com foco em desenvolvimento de software, arquitetura de sistemas e metodologias ágeis.'
  }
]

function About() {
  const [activeTab, setActiveTab] = useState('experience')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  const slideVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="py-24  relative ">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#F66135]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#F66135]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[600px]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideVariants}
            className="flex flex-col items-center lg:items-start justify-center order-2 lg:order-1"
          >
            <motion.span
              className="inline-block px-4 py-1 rounded-full bg-[#F66135]/10 text-[#F66135] text-sm mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Conheça-me
            </motion.span>

            <h2 className="text-3xl lg:text-4xl font-bold text-[#ededed] mb-6 text-center lg:text-left">
              Sobre Mim
            </h2>

            <motion.div
              className="w-24 h-1 bg-[#F66135] rounded-full mb-8 lg:self-start"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            <div className="relative w-64 h-64 lg:w-72 lg:h-72 mb-8 lg:mb-0 flex-shrink-0">
              <motion.div
                className="w-full h-full bg-[#171717] rounded-2xl overflow-hidden relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/assets/silasedit.jpg"
                  width={288}
                  height={288}
                  alt="Foto de Perfil"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 w-full h-full bg-[#F66135]/80 rounded-2xl"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />

              <motion.div
                className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#F66135]/30"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              />
              <motion.div
                className="absolute top-16 -right-6 w-8 h-8 rounded-full bg-[#F66135]/20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 1 }}
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col justify-center order-1 lg:order-2 lg:pl-8"
          >
            <motion.div
              variants={itemVariants}
              className="prose prose-invert max-w-none"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-[#ededed] mb-6 text-center lg:text-left">
                Olá, sou <span className="text-[#F66135]">Silas Matos</span>
              </h3>
              <p className="text-[#ededed]/80 text-base lg:text-lg leading-relaxed text-justify lg:text-left">
                Sou um profissional apaixonado por tecnologia, com 2 anos de
                experiência prática como Desenvolvedor Full Stack, com ênfase em
                desenvolvimento Front-End, utilizando principalmente React e
                tecnologias modernas que potencializam a criação de interfaces
                dinâmicas e escaláveis. Minha jornada na área começou com um
                curso técnico em Desenvolvimento de Sistemas, o que me
                proporcionou uma base sólida e abriu as portas para minha
                primeira oportunidade profissional. Desde então, tenho evoluído
                constantemente em ambientes ágeis, onde participei de todas as
                etapas do ciclo de vida das aplicações web – desde o
                planejamento até a entrega.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-24">
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-[#171717] p-1 rounded-lg">
              <motion.button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'experience'
                    ? 'bg-[#F66135] text-[#ededed]'
                    : 'text-[#ededed]/70 hover:text-[#ededed]'
                }`}
                onClick={() => setActiveTab('experience')}
                whileHover={{ scale: activeTab !== 'experience' ? 1.05 : 1 }}
                whileTap={{ scale: 0.98 }}
              >
                Experiência Profissional
              </motion.button>
              <motion.button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'education'
                    ? 'bg-[#F66135] text-[#ededed]'
                    : 'text-[#ededed]/70 hover:text-[#ededed]'
                }`}
                onClick={() => setActiveTab('education')}
                whileHover={{ scale: activeTab !== 'education' ? 1.05 : 1 }}
                whileTap={{ scale: 0.98 }}
              >
                Formação Acadêmica
              </motion.button>
            </div>
          </div>

          <motion.div
            className={`${activeTab === 'experience' ? 'block' : 'hidden'}`}
            initial="hidden"
            animate={activeTab === 'experience' ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-[#171717]"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`mb-12 flex flex-col md:flex-row ${
                    index % 2 === 0
                      ? 'md:flex-row-reverse md:text-right'
                      : 'md:text-left'
                  }`}
                >
                  {/* Conteúdo */}
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
                    }`}
                  >
                    <motion.div
                      className="bg-[#171717] p-6 rounded-xl relative z-10"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mb-2">
                        <span className="px-3 py-1 text-xs rounded-full bg-[#F66135]/10 text-[#F66135]">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#ededed] mb-1">
                        {exp.role}
                      </h3>
                      <h4 className="text-lg text-[#F66135] mb-3">
                        {exp.company}
                      </h4>
                      <p className="text-[#ededed]/80 mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs rounded-full bg-[#0a0a0a] text-[#ededed]/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  <div className="md:w-1/2 flex items-center justify-center relative">
                    <motion.div
                      className="w-6 h-6 rounded-full bg-[#F66135] z-20 absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.3 }}
                    >
                      <div className="w-3 h-3 rounded-full bg-[#ededed]"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={`${activeTab === 'education' ? 'block' : 'hidden'}`}
            initial="hidden"
            animate={activeTab === 'education' ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-[#171717]"></div>

              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className={`mb-12 flex flex-col md:flex-row ${
                    index % 2 === 0
                      ? 'md:flex-row-reverse md:text-right'
                      : 'md:text-left'
                  }`}
                >
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
                    }`}
                  >
                    <motion.div
                      className="bg-[#171717] p-6 rounded-xl relative z-10"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mb-2">
                        <span className="px-3 py-1 text-xs rounded-full bg-[#F66135]/10 text-[#F66135]">
                          {edu.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#ededed] mb-1">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg text-[#F66135] mb-3">
                        {edu.institution}
                      </h4>
                      <p className="text-[#ededed]/80">{edu.description}</p>
                    </motion.div>
                  </div>

                  <div className="md:w-1/2 flex items-center justify-center relative">
                    <motion.div
                      className="w-6 h-6 rounded-full bg-[#F66135] z-20 absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.3 }}
                    >
                      <div className="w-3 h-3 rounded-full bg-[#ededed]"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
