'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
const experiences = [
  {
    id: 1,
    role: 'Desenvolvedor Full Stack Especialista',
    company: 'Tel Centro de Contatos',
    period: '2024 - Presente',
    description:
      'Atuo como referência técnica da equipe, liderando decisões arquiteturais e garantindo a adoção de boas práticas e padrões de codificação. Supervisiono o ciclo completo de desenvolvimento, desde a análise de requisitos até a implantação em produção. Foco em escalabilidade, performance e alinhamento estratégico das soluções técnicas com os objetivos do negócio. Também lidero revisões de código e mentoria de desenvolvedores.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'NestJS',
      'Fastify',
      'PostgreSQL',
      'Tailwind CSS',
      'Docker'
    ]
  },
  {
    id: 2,
    role: 'Desenvolvedor Full Stack Sênior',
    company: 'Tel Centro de Contatos',
    period: '2023 - 2024',
    description:
      'Desenvolvimento e manutenção de aplicações web atuando nas camadas front-end e back-end. Participação ativa em planejamento técnico, revisões de código e entrega de funcionalidades escaláveis. Construção de interfaces responsivas e acessíveis utilizando React, trabalhando em colaboração com designers e equipes de backend em ambiente ágil.',
    technologies: [
      'React',
      'JavaScript',
      'TypeScript',
      'Next.js',
      'Node.js',
      'PostgreSQL',
      'SCSS'
    ]
  },
  {
    id: 3,
    role: 'Desenvolvedor Full Stack Pleno',
    company: 'Tel Centro de Contatos',
    period: '2022 - 2023',
    description:
      'Criação de interfaces modernas e interativas com foco em usabilidade e experiência do usuário. Implementação de animações fluidas, otimização de performance front-end e aplicação de princípios de código limpo e componentização reutilizável.',
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
                  src="/foto-corte.jpg"
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
                Sou um profissional apaixonado por tecnologia, com 4 anos de
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

        <div className="mt-28">
          {/* Tab Switcher */}
          <div className="flex justify-center mb-14">
            <div className="relative flex bg-[#111111] border border-[#ffffff0d] p-1 rounded-2xl gap-1 shadow-lg">
              {['experience', 'education'].map(tab => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-8 py-3 rounded-xl text-sm font-semibold transition-colors duration-300 z-10 ${
                    activeTab === tab
                      ? 'text-[#ededed]'
                      : 'text-[#ededed]/50 hover:text-[#ededed]/80'
                  }`}
                  whileTap={{ scale: 0.97 }}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute inset-0 bg-[#F66135] rounded-xl shadow-[0_0_20px_#F6613540]"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30
                      }}
                    />
                  )}
                  <span className="relative z-10">
                    {tab === 'experience'
                      ? 'Experiência Profissional'
                      : 'Formação Acadêmica'}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Experience Tab */}
          <motion.div
            key="experience"
            className={activeTab === 'experience' ? 'block' : 'hidden'}
            initial={{ opacity: 0, y: 20 }}
            animate={
              activeTab === 'experience'
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.4 }}
          >
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-6 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-[#F66135]/60 via-[#F66135]/20 to-transparent md:-translate-x-1/2" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`mb-10 flex items-start gap-6 md:gap-0 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`flex-1 pl-14 md:pl-0 ${index % 2 === 0 ? 'md:pr-14' : 'md:pl-14'}`}
                  >
                    <motion.div
                      className="group relative bg-[#111111] border border-[#ffffff0d] p-6 rounded-2xl overflow-hidden"
                      whileHover={{ y: -4, borderColor: '#F6613530' }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Glow on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#F66135]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                      {/* Period badge */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-[#F66135]/10 text-[#F66135] border border-[#F66135]/20 mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F66135] animate-pulse" />
                        {exp.period}
                      </span>

                      <h3 className="text-lg font-bold text-[#ededed] mb-1 text-left">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-[#F66135] mb-3 text-left">
                        {exp.company}
                      </h4>
                      <p className="text-[#ededed]/70 text-sm leading-relaxed mb-4 text-left">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-xs rounded-lg bg-[#0a0a0a] text-[#ededed]/60 border border-[#ffffff08] hover:border-[#F66135]/30 hover:text-[#ededed]/90 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline dot — desktop center, mobile left */}
                  <div className="absolute left-6 md:static md:flex md:items-start md:justify-center md:w-0 mt-6 md:mt-7 md:relative">
                    <motion.div
                      className="w-5 h-5 rounded-full bg-[#F66135] border-4 border-[#0a0a0a] shadow-[0_0_12px_#F6613570] z-10 absolute left-0 top-0 md:static"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1 + 0.3,
                        type: 'spring',
                        stiffness: 300
                      }}
                    />
                  </div>

                  {/* Empty half for alternating layout on desktop */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Tab */}
          <motion.div
            key="education"
            className={activeTab === 'education' ? 'block' : 'hidden'}
            initial={{ opacity: 0, y: 20 }}
            animate={
              activeTab === 'education'
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.4 }}
          >
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-6 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-[#F66135]/60 via-[#F66135]/20 to-transparent md:-translate-x-1/2" />

              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`mb-10 flex items-start gap-6 md:gap-0 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`flex-1 pl-14 md:pl-0 ${index % 2 === 0 ? 'md:pr-14' : 'md:pl-14'}`}
                  >
                    <motion.div
                      className="group relative bg-[#111111] border border-[#ffffff0d] p-6 rounded-2xl overflow-hidden"
                      whileHover={{ y: -4, borderColor: '#F6613530' }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#F66135]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-[#F66135]/10 text-[#F66135] border border-[#F66135]/20 mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F66135]" />
                        {edu.period}
                      </span>

                      <h3 className="text-lg font-bold text-[#ededed] mb-1 text-left">
                        {edu.degree}
                      </h3>
                      <h4 className="text-sm font-semibold text-[#F66135] mb-3 text-left">
                        {edu.institution}
                      </h4>
                      <p className="text-[#ededed]/70 text-sm leading-relaxed text-left">
                        {edu.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-6 md:static md:flex md:items-start md:justify-center md:w-0 mt-6 md:mt-7 md:relative">
                    <motion.div
                      className="w-5 h-5 rounded-full bg-[#F66135] border-4 border-[#0a0a0a] shadow-[0_0_12px_#F6613570] z-10 absolute left-0 top-0 md:static"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1 + 0.3,
                        type: 'spring',
                        stiffness: 300
                      }}
                    />
                  </div>

                  <div className="hidden md:block flex-1" />
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
